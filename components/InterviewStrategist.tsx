"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { generateInterviewDossier } from "@/lib/actions/general.action";
import { useSearchParams } from "next/navigation";

interface InterviewStrategistProps {
  userName: string;
  userId: string;
}

export default function InterviewStrategist({ userName, userId }: InterviewStrategistProps) {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    jobDescription: "",
    resume: "",
    companyName: "",
    concerns: ""
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [dossier, setDossier] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileUpload = async (file: File) => {
    if (!file) return;
    
    setIsUploading(true);
    setError("");
    
    try {
      const uploadFormData = new FormData();
      uploadFormData.append('resume', file);
      uploadFormData.append('userId', userId);
      
      const response = await fetch('/api/upload-resume', {
        method: 'POST',
        body: uploadFormData,
      });
      
      const result = await response.json();
      
      if (result.success) {
        setFormData(prev => ({ ...prev, resume: result.resumeText }));
      } else {
        setError(result.error || 'Failed to upload resume');
      }
    } catch (error) {
      setError('Error uploading resume');
    } finally {
      setIsUploading(false);
    }
  };

  const handleGenerate = async () => {
    if (!formData.jobDescription || !formData.resume || !formData.companyName) {
      setError("Please fill in all required fields (Job Description, Resume, Company Name)");
      return;
    }

    setIsGenerating(true);
    setError("");
    try {
      const result = await generateInterviewDossier({
        jobDescription: formData.jobDescription,
        resume: formData.resume,
        companyName: formData.companyName,
        concerns: formData.concerns,
        userId
      });

      if (result.success && result.dossier) {
        setDossier(result.dossier);
        setError("");
      } else {
        setError(result.error || "Failed to generate interview dossier. Please try again.");
      }
    } catch (error) {
      setError("An error occurred while generating the dossier.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(dossier);
    alert("Dossier copied to clipboard!");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-8">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold">
            Interview Strategist AI
          </h1>
          <p className="text-xl">
            Generate your personalized Interview Dossier
          </p>

          {/* Form Section */}
          {!dossier ? (
            <div className="flex justify-center">
              <div className="card-border w-full max-w-2xl">
                <div className="card rounded-none">
                  <div className="p-6">
                    <div className="form space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="companyName" className="label">
                            Company Name *
                          </Label>
                          <Input
                            id="companyName"
                            value={formData.companyName}
                            onChange={e => handleInputChange("companyName", e.target.value)}
                            placeholder="e.g., Google, Microsoft, Amazon"
                            className="input rounded-none"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="concerns" className="label">
                            Your Concerns (Optional)
                          </Label>
                          <Input
                            id="concerns"
                            value={formData.concerns}
                            onChange={e => handleInputChange("concerns", e.target.value)}
                            placeholder="e.g., Nervous about technical questions"
                            className="input rounded-none"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="jobDescription" className="label">
                          Job Description *
                        </Label>
                        <textarea
                          id="jobDescription"
                          value={formData.jobDescription}
                          onChange={e => handleInputChange("jobDescription", e.target.value)}
                          placeholder="Paste the complete job description here..."
                          className="input h-40 resize-vertical w-full "
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="resume" className="label">
                          Your Resume *
                        </Label>
                        <div className="space-y-3">
                          <div>
                            <input
                              type="file"
                              accept=".pdf"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                  setResumeFile(file);
                                  handleFileUpload(file);
                                }
                              }}
                              className="hidden"
                              id="resume-upload"
                            />
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              onClick={() => document.getElementById('resume-upload')?.click()}
                              disabled={isUploading}
                              className="rounded-none w-fit"
                            >
                              {resumeFile ? resumeFile.name : 'Choose PDF File'}
                            </Button>
                          </div>
                          {isUploading && (
                            <p className="text-sm text-blue-500">Uploading and processing PDF...</p>
                          )}

                        </div>
                      </div>

                      <Button
                        onClick={handleGenerate}
                        disabled={isGenerating || isUploading}
                        size="sm"
                        className="btn rounded-none w-fit"
                      >
                        {isGenerating ? "Generating Dossier..." : isUploading ? "Processing Resume..." : "Generate Interview Dossier"}
                      </Button>

                      {error && (
                        <div className="card-border w-full">
                          <div className="card rounded-none">
                            <div className="p-4">
                              <p className="text-destructive-100 text-sm font-medium">{error}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="w-full max-w-2xl space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-3xl font-bold">
                    Your Interview Dossier
                  </h2>
                  <Button
                    onClick={handleCopyToClipboard}
                    variant="outline"
                    className="btn-secondary rounded-none"
                  >
                    Copy to Clipboard
                  </Button>
                </div>

                <div className="card-border">
                  <div className="card rounded-none">
                    <div className="p-6">
                      <pre className="whitespace-pre-wrap text-sm leading-relaxed text-light-100">
                        {dossier || "No content to display"}
                      </pre>
                      <div className="mt-4 text-xs text-light-100 opacity-60">
                        Content length: {dossier?.length || 0} characters
                      </div>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={() => {
                    setDossier("");
                    setError("");
                    setResumeFile(null);
                    setFormData({
                      jobDescription: "",
                      resume: "",
                      companyName: "",
                      concerns: ""
                    });
                  }}
                  variant="outline"
                  className="btn-secondary w-full rounded-none"
                >
                  Generate New Dossier
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
