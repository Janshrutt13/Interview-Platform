"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { generateInterviewDossier } from "@/lib/actions/general.action";

interface InterviewStrategistProps {
  userName: string;
  userId: string;
}

export default function InterviewStrategist({ userName, userId }: InterviewStrategistProps) {
  const [formData, setFormData] = useState({
    jobDescription: "",
    resume: "",
    companyName: "",
    concerns: ""
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [dossier, setDossier] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isAxonMode, setIsAxonMode] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
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
        userId,
        isAxonMode
      });

      if (result.success && result.dossier) {
        console.log("Setting dossier:", result.dossier.substring(0, 200));
        setDossier(result.dossier);
        setError("");
      } else {
        console.log("Error result:", result);
        setError(result.error || "Failed to generate interview dossier. Please try again.");
      }
    } catch (error) {
      console.error("Error generating dossier:", error);
      setError("An error occurred while generating the dossier.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(dossier);
    alert("Dossier copied to clipboard!");
  };

  console.log("Component render - dossier:", dossier?.length || 0, "isGenerating:", isGenerating);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">
          {isAxonMode ? "AXON Interview Strategist" : "Interview Strategist AI"}
        </h1>
        <p className="text-gray-600">
          {isAxonMode 
            ? "Generate your hyper-personalized Interview Briefing" 
            : "Generate your personalized Interview Dossier"
          }
        </p>
        
        <div className="flex justify-center mt-4">
          <div className="bg-gray-100 rounded-lg p-1 flex">
            <button
              onClick={() => setIsAxonMode(false)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                !isAxonMode 
                  ? "bg-white text-gray-900 shadow-sm" 
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Phase 1: Dossier
            </button>
            <button
              onClick={() => setIsAxonMode(true)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isAxonMode 
                  ? "bg-white text-gray-900 shadow-sm" 
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Phase 2: AXON
            </button>
          </div>
        </div>
      </div>

      {!dossier ? (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="companyName">Company Name *</Label>
              <Input
                id="companyName"
                value={formData.companyName}
                onChange={(e) => handleInputChange("companyName", e.target.value)}
                placeholder="e.g., Google, Microsoft, Amazon"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="concerns">Your Concerns (Optional)</Label>
              <Input
                id="concerns"
                value={formData.concerns}
                onChange={(e) => handleInputChange("concerns", e.target.value)}
                placeholder="e.g., Lack of experience with React, nervous about technical questions"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="jobDescription">Job Description *</Label>
            <textarea
              id="jobDescription"
              value={formData.jobDescription}
              onChange={(e) => handleInputChange("jobDescription", e.target.value)}
              placeholder="Paste the complete job description here..."
              className="w-full h-40 p-3 border border-gray-300 rounded-md resize-vertical"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="resume">Your Resume *</Label>
            <textarea
              id="resume"
              value={formData.resume}
              onChange={(e) => handleInputChange("resume", e.target.value)}
              placeholder="Paste your resume content here..."
              className="w-full h-40 p-3 border border-gray-300 rounded-md resize-vertical"
            />
          </div>

          <Button 
            onClick={handleGenerate} 
            disabled={isGenerating}
            className="w-full"
          >
            {isGenerating 
              ? (isAxonMode ? "Generating AXON Briefing..." : "Generating Dossier...") 
              : (isAxonMode ? "Generate AXON Briefing" : "Generate Interview Dossier")
            }
          </Button>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-md p-4">
              <p className="text-red-800 text-sm">{error}</p>
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">
              {isAxonMode ? "AXON Interview Briefing" : "Your Interview Dossier"}
            </h2>
            <Button onClick={handleCopyToClipboard} variant="outline">
              Copy to Clipboard
            </Button>
          </div>
          
          <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
            <pre className="whitespace-pre-wrap text-sm text-gray-800 leading-relaxed">
              {dossier || "No content to display"}
            </pre>
            <div className="mt-2 text-xs text-gray-500">
              Content length: {dossier?.length || 0} characters
            </div>
          </div>

          <Button 
            onClick={() => {
              setDossier("");
              setError("");
              setFormData({
                jobDescription: "",
                resume: "",
                companyName: "",
                concerns: ""
              });
            }}
            variant="outline"
            className="w-full"
          >
            {isAxonMode ? "Generate New Briefing" : "Generate New Dossier"}
          </Button>
        </div>
      )}
    </div>
  );
}
