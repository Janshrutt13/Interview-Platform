import { NextRequest, NextResponse } from 'next/server';
import { adminDb } from '@/firebase/admin';
import PDFParser from 'pdf2json';
import { writeFileSync, unlinkSync } from 'fs';
import { join } from 'path';
import { tmpdir } from 'os';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('resume') as File;
    const userId = formData.get('userId') as string;

    if (!file || !userId) {
      return NextResponse.json({ error: 'Missing file or userId' }, { status: 400 });
    }

    if (file.type !== 'application/pdf') {
      return NextResponse.json({ error: 'Only PDF files are allowed' }, { status: 400 });
    }

    // Convert file to buffer
    const buffer = Buffer.from(await file.arrayBuffer());
    
    // Extract text from PDF using pdf2json
    const tempPath = join(tmpdir(), `temp-${Date.now()}.pdf`);
    writeFileSync(tempPath, buffer);
    
    const resumeText = await new Promise<string>((resolve, reject) => {
      const pdfParser = new (PDFParser as any)(null, 1);
      
      pdfParser.on('pdfParser_dataError', (errData: any) => {
        console.error('PDF parsing error:', errData.parserError);
        unlinkSync(tempPath);
        reject(new Error('Failed to parse PDF'));
      });
      
      pdfParser.on('pdfParser_dataReady', (pdfData: any) => {
        try {
          let text = '';
          if (pdfData.Pages) {
            pdfData.Pages.forEach((page: any) => {
              if (page.Texts) {
                page.Texts.forEach((textItem: any) => {
                  if (textItem.R) {
                    textItem.R.forEach((textRun: any) => {
                      if (textRun.T) {
                        text += decodeURIComponent(textRun.T) + ' ';
                      }
                    });
                  }
                });
              }
              text += '\n';
            });
          }
          unlinkSync(tempPath);
          resolve(text.trim() || 'No text could be extracted from PDF');
        } catch (error) {
          unlinkSync(tempPath);
          reject(error);
        }
      });
      
      pdfParser.loadPDF(tempPath);
    });

    // Store resume data using Admin SDK
    const resumeDoc = {
      userId,
      fileName: file.name,
      extractedText: resumeText,
      uploadedAt: new Date(),
    };

    await adminDb.collection('resumes').doc(userId).set(resumeDoc);

    return NextResponse.json({ 
      success: true, 
      resumeText
    });

  } catch (error) {
    console.error('Error uploading resume:', error);
    return NextResponse.json({ 
      error: 'Failed to upload and process resume' 
    }, { status: 500 });
  }
}