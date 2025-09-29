"use client";




import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { startAxonSession, endAxonSession, getInstantFeedback, getNextQuestion } from "@/lib/actions/axon.action";
import AxonSessionHistory from "@/components/AxonSessionHistory";

interface AxonInterviewPracticeProps {
  userName: string;
  userId: string;
}

interface SessionData {
  sessionId: string;
  currentQuestion: string;
  questionIndex: number;
  totalQuestions: number;
  startTime: string;
}

interface InstantFeedback {
  positives: string[];
  improvements: string[];
  rating: string;
}

export default function AxonInterviewPractice({ userName, userId }: AxonInterviewPracticeProps) {
  const [isActive, setIsActive] = useState(false);
  const [sessionData, setSessionData] = useState<SessionData | null>(null);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [feedback, setFeedback] = useState<InstantFeedback | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [jobRole, setJobRole] = useState("");
  const [experience, setExperience] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const startSession = async () => {
    if (!jobRole || !experience) return alert("Please fill in job role and experience level");

    setIsLoading(true);
    try {
      const result = await startAxonSession({ userId, jobRole, experience, sessionType: "practice" });
      if (result.success && result.session) {
        setSessionData(result.session);
        setIsActive(true);
      }
    } catch (error) {
      console.error("Failed to start session:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const endSession = async () => {
    if (!sessionData) return;
    setIsLoading(true);
    try {
      await endAxonSession({ sessionId: sessionData.sessionId, userId });
      setIsActive(false);
      setSessionData(null);
      setCurrentAnswer("");
      setFeedback(null);
    } catch (error) {
      console.error("Failed to end session:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => audioChunksRef.current.push(event.data);
      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        await processAudioResponse(audioBlob);
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (error) {
      console.error("Failed to start recording:", error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const processAudioResponse = async (audioBlob: Blob) => {
    if (!sessionData) return;
    setIsLoading(true);
    try {
      const result = await getInstantFeedback({
        sessionId: sessionData.sessionId,
        questionIndex: sessionData.questionIndex,
        audioBlob,
        textAnswer: currentAnswer,
        userId
      });
      if (result.success && result.feedback) setFeedback(result.feedback);
    } catch (error) {
      console.error("Failed to process audio:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const submitTextAnswer = async () => {
    if (!currentAnswer.trim() || !sessionData) return;
    setIsLoading(true);
    try {
      const result = await getInstantFeedback({
        sessionId: sessionData.sessionId,
        questionIndex: sessionData.questionIndex,
        textAnswer: currentAnswer,
        userId
      });
      if (result.success && result.feedback) setFeedback(result.feedback);
    } catch (error) {
      console.error("Failed to submit answer:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const nextQuestion = async () => {
    if (!sessionData) return;
    setIsLoading(true);
    try {
      const result = await getNextQuestion({ sessionId: sessionData.sessionId, currentIndex: sessionData.questionIndex });
      if (result.success && !result.isComplete) {
        setSessionData({ ...sessionData, currentQuestion: result.question || "", questionIndex: result.questionIndex || 0 });
        setCurrentAnswer("");
        setFeedback(null);
      } else if (result.isComplete) {
        await endSession();
        // Redirect to dossier generation after completing AXON session
        window.location.href = '/?axon_completed=true';
      }
    } catch (error) {
      console.error("Failed to get next question:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (showHistory) return <AxonSessionHistory userId={userId} />;

  if (!isActive) {
    return (
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold">AXON Interview Strategist</h1>
          <p className="text-xl">Real-time interview practice with instant AI feedback</p>
          <div className="flex justify-center gap-4 mt-6">
            <Button onClick={() => setShowHistory(true)} variant="outline" className="btn-secondary">View Session History</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="card-border">
            <div className="card">
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">Start Your Session</h2>
                <div className="form space-y-6">
                  <div className="space-y-3">
                    <Label htmlFor="jobRole" className="label text-base">Job Role</Label>
                    <Input
                      id="jobRole"
                      value={jobRole}
                      onChange={(e) => setJobRole(e.target.value)}
                      placeholder="e.g., Software Engineer, Product Manager"
                      className="input"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="experience" className="label text-base">Experience Level</Label>
                    <select
                      id="experience"
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                      className="input"
                    >
                      <option value="">Select experience level</option>
                      <option value="entry">Entry Level (0-2 years)</option>
                      <option value="mid">Mid Level (3-5 years)</option>
                      <option value="senior">Senior Level (6+ years)</option>
                    </select>
                  </div>

                  <Button 
                    onClick={startSession} 
                    disabled={isLoading}
                    className="btn text-lg py-4"
                  >
                    {isLoading ? "Starting Session..." : "Start AXON Practice Session"}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="card-border">
            <div className="card">
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-6 text-center">What makes AXON different:</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🎤</span>
                    <div>
                      <h4 className="font-semibold text-primary-200 mb-1">Real-time voice interaction</h4>
                      <p className="text-sm text-light-100">Practice with AI interviewer using natural conversation</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">⚡</span>
                    <div>
                      <h4 className="font-semibold text-primary-200 mb-1">Instant feedback</h4>
                      <p className="text-sm text-light-100">Get immediate scores on confidence, clarity, and pace</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🎯</span>
                    <div>
                      <h4 className="font-semibold text-primary-200 mb-1">Adaptive questioning</h4>
                      <p className="text-sm text-light-100">AI adjusts difficulty based on your responses</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">⏱️</span>
                    <div>
                      <h4 className="font-semibold text-primary-200 mb-1">Quick sessions</h4>
                      <p className="text-sm text-light-100">15-30 minute focused practice sessions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-4xl font-bold mb-2">AXON Live Session</h1>
          <p className="text-lg text-light-100">Question {(sessionData?.questionIndex ?? 0) + 1} of {sessionData?.totalQuestions}</p>
        </div>
        <Button onClick={endSession} variant="outline" disabled={isLoading} className="btn-secondary px-6 py-3">End Session</Button>
      </div>

      <div className="card-border">
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-4">Current Question:</h2>
          <p className="text-lg mb-6">{sessionData?.currentQuestion}</p>

          <div className="space-y-6">
            <div className="flex gap-4 justify-center">
              <Button onClick={isRecording ? stopRecording : startRecording} className={`${isRecording ? 'btn-disconnect' : 'btn-call'} px-8 py-3`} disabled={isLoading}>
                {isRecording ? "Stop Recording" : "Start Voice Answer"}
              </Button>
            </div>

            <div className="text-center text-light-100 opacity-60">OR</div>

            <div className="space-y-4">
              <Label className="text-base font-medium text-light-100">Type your answer:</Label>
              <div className="card-border">
                <div className="card">
                  <textarea
                    value={currentAnswer}
                    onChange={(e) => setCurrentAnswer(e.target.value)}
                    placeholder="Type your detailed answer here..."
                    className="w-full h-40 p-4 bg-transparent text-light-100 placeholder:text-light-100/50 border-none outline-none resize-none rounded-lg"
                    disabled={isRecording}
                  />
                </div>
              </div>
              <Button onClick={submitTextAnswer} disabled={!currentAnswer.trim() || isLoading || isRecording} className="btn-primary w-full py-3 text-lg">
                {isLoading ? "Analyzing Answer..." : "Submit Answer"}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {feedback && (
        <div className="card-border">
          <div className="card p-6">
            <h3 className="text-lg font-semibold mb-4">Instant Feedback</h3>
            
            <div className="mb-4">
              <h4 className="font-semibold text-success-100 mb-1">Overall Rating: {feedback.rating}/10</h4>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-success-100 mb-1">Key Points / Positives:</h4>
                <ul className="space-y-1 text-light-100">
                  {feedback.positives.map((p, i) => <li key={i}>• {p}</li>)}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-destructive-100 mb-1">Improvements / Suggestions:</h4>
                <ul className="space-y-1 text-light-100">
                  {feedback.improvements.map((imp, i) => <li key={i}>• {imp}</li>)}
                </ul>
              </div>
            </div>

            <Button onClick={nextQuestion} className="btn-primary w-full mt-6">Next Question</Button>
          </div>
        </div>
      )}
    </div>
  );
}
