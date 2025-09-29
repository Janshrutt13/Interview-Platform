"use client";

import { useState, useEffect } from "react";
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
  const [isGenerating, setIsGenerating] = useState(false);
  const [dossier, setDossier] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isAxonMode, setIsAxonMode] = useState(false);
  const [showAxonCompletionMessage, setShowAxonCompletionMessage] = useState(false);

  useEffect(() => {
    if (searchParams?.get('axon_completed') === 'true') {
      setShowAxonCompletionMessage(true);
      // Clear the URL parameter
      window.history.replaceState({}, '', '/');
    }
  }, [searchParams]);

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
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold">
          {isAxonMode ? "AXON Interview Strategist" : "Interview Strategist AI"}
        </h1>
        <p className="text-xl">
          {isAxonMode 
            ? "Generate your hyper-personalized Interview Briefing" 
            : "Generate your personalized Interview Dossier"
          }
        </p>
        
        {showAxonCompletionMessage && (
          <div className="card-border max-w-2xl mx-auto">
            <div className="card">
              <div className="p-6 text-center">
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="text-xl font-bold text-success-100 mb-2">AXON Session Completed!</h3>
                <p className="text-light-100 mb-4">
                  Great job completing your AXON practice session! Now let's create a strategic dossier 
                  to prepare you for your actual interviews.
                </p>
                <Button 
                  onClick={() => setShowAxonCompletionMessage(false)}
                  className="btn-primary"
                >
                  Continue to Dossier Generation
                </Button>
              </div>
            </div>
          </div>
        )}
        
        <div className="flex justify-center mt-8">
          <div className="card-border">
            <div className="card">
              <div className="p-2 flex gap-2">
                <button
                  onClick={() => setIsAxonMode(false)}
                  className={`px-6 py-3 rounded-lg text-base font-semibold transition-colors ${
                    !isAxonMode 
                      ? "bg-primary-200 text-dark-100 shadow-lg" 
                      : "hover:bg-dark-200 text-light-100"
                  }`}
                >
                  Phase 2: Dossier
                </button>
                <button
                  onClick={() => window.location.href = '/axon'}
                  className="px-6 py-3 rounded-lg text-base font-semibold transition-colors bg-success-100 text-dark-100 hover:bg-success-100/80 shadow-lg"
                >
                  Phase 1: AXON Live Practice
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card-border mt-6">
          <div className="card">
            <div className="p-6">
              <h3 className="font-semibold mb-4">Choose Your Phase:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="card-border">
                  <div className="card">
                    <div className="p-4">
                      <h4 className="font-semibold text-primary-200 mb-2">Phase 1: AXON Live Practice</h4>
                      <ul className="space-y-1">
                        <li>• Real-time voice interaction</li>
                        <li>• Instant feedback on delivery</li>
                        <li>• 15-30 minute sessions</li>
                        <li>• Focus on communication skills</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-border">
                  <div className="card">
                    <div className="p-4">
                      <h4 className="font-semibold text-success-100 mb-2">Phase 2: Strategic Dossier</h4>
                      <ul className="space-y-1">
                        <li>• Deep profile analysis</li>
                        <li>• Comprehensive preparation</li>
                        <li>• Tailored question sets</li>
                        <li>• Long-term strategy planning</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {!dossier ? (
        <div className="card-border">
          <div className="card">
            <div className="p-6">
              <div className="form space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="companyName" className="label">Company Name *</Label>
                    <Input
                      id="companyName"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange("companyName", e.target.value)}
                      placeholder="e.g., Google, Microsoft, Amazon"
                      className="input"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="concerns" className="label">Your Concerns (Optional)</Label>
                    <Input
                      id="concerns"
                      value={formData.concerns}
                      onChange={(e) => handleInputChange("concerns", e.target.value)}
                      placeholder="e.g., Lack of experience with React, nervous about technical questions"
                      className="input"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="jobDescription" className="label">Job Description *</Label>
                  <textarea
                    id="jobDescription"
                    value={formData.jobDescription}
                    onChange={(e) => handleInputChange("jobDescription", e.target.value)}
                    placeholder="Paste the complete job description here..."
                    className="input h-40 resize-vertical"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="resume" className="label">Your Resume *</Label>
                  <textarea
                    id="resume"
                    value={formData.resume}
                    onChange={(e) => handleInputChange("resume", e.target.value)}
                    placeholder="Paste your resume content here..."
                    className="input h-40 resize-vertical"
                  />
                </div>

                <Button 
                  onClick={handleGenerate} 
                  disabled={isGenerating}
                  className="btn"
                >
                  {isGenerating 
                    ? (isAxonMode ? "Generating AXON Briefing..." : "Generating Dossier...") 
                    : (isAxonMode ? "Generate AXON Briefing" : "Generate Interview Dossier")
                  }
                </Button>

                {error && (
                  <div className="card-border">
                    <div className="card">
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
      ) : (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold">
              {isAxonMode ? "AXON Interview Briefing" : "Your Interview Dossier"}
            </h2>
            <Button onClick={handleCopyToClipboard} variant="outline" className="btn-secondary">
              Copy to Clipboard
            </Button>
          </div>
          
          <div className="card-border">
            <div className="card">
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
              setFormData({
                jobDescription: "",
                resume: "",
                companyName: "",
                concerns: ""
              });
            }}
            variant="outline"
            className="btn-secondary w-full"
          >
            {isAxonMode ? "Generate New Briefing" : "Generate New Dossier"}
          </Button>
        </div>
      )}
    </div>
  );
}
