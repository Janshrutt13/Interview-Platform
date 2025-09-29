"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { getAxonSessionHistory } from "@/lib/actions/axon.action";

interface AxonSessionHistoryProps {
  userId: string;
}

export default function AxonSessionHistory({ userId }: AxonSessionHistoryProps) {
  const [sessions, setSessions] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSession, setSelectedSession] = useState<any>(null);

  useEffect(() => {
    loadSessionHistory();
  }, [userId]);

  const loadSessionHistory = async () => {
    setIsLoading(true);
    try {
      const result = await getAxonSessionHistory({ userId, limit: 10 });
      if (result.success && result.sessions) {
        setSessions(result.sessions);
      }
    } catch (error) {
      console.error("Failed to load session history:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const formatDuration = (startTime: Date, endTime: Date) => {
    const duration = new Date(endTime).getTime() - new Date(startTime).getTime();
    const minutes = Math.floor(duration / 60000);
    return `${minutes} min`;
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center">Loading session history...</div>
      </div>
    );
  }

  if (selectedSession) {
    return (
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Session Details</h2>
          <Button onClick={() => setSelectedSession(null)} variant="outline">
            Back to History
          </Button>
        </div>

        <div className="bg-white border rounded-lg p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center">
              <div className={`text-2xl font-bold ${getScoreColor(selectedSession.summary?.overallScore || 0)}`}>
                {selectedSession.summary?.overallScore || 0}%
              </div>
              <div className="text-sm text-gray-600">Overall Score</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {selectedSession.responses?.length || 0}
              </div>
              <div className="text-sm text-gray-600">Questions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                {selectedSession.jobRole}
              </div>
              <div className="text-sm text-gray-600">Role</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-600">
                {formatDuration(selectedSession.startTime, selectedSession.endTime)}
              </div>
              <div className="text-sm text-gray-600">Duration</div>
            </div>
          </div>

          {selectedSession.summary && (
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-green-700 mb-2">Strengths:</h3>
                <ul className="list-disc list-inside text-sm text-green-600">
                  {selectedSession.summary.strengths.map((strength: string, index: number) => (
                    <li key={index}>{strength}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-orange-700 mb-2">Areas for Improvement:</h3>
                <ul className="list-disc list-inside text-sm text-orange-600">
                  {selectedSession.summary.areasForImprovement.map((area: string, index: number) => (
                    <li key={index}>{area}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-blue-700 mb-2">Next Steps:</h3>
                <ul className="list-disc list-inside text-sm text-blue-600">
                  {selectedSession.summary.nextSteps.map((step: string, index: number) => (
                    <li key={index}>{step}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-bold">AXON Session History</h2>

      {sessions.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-600">No practice sessions yet. Start your first AXON session!</p>
          <Button className="mt-4" onClick={() => window.location.href = '/axon'}>
            Start Practice Session
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          {sessions.map((session) => (
            <div
              key={session.id}
              className="bg-white border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => setSelectedSession(session)}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg">{session.jobRole}</h3>
                  <p className="text-gray-600 text-sm">
                    {session.experience} level • {new Date(session.endTime).toLocaleDateString()}
                  </p>
                </div>
                <div className="text-right">
                  <div className={`text-xl font-bold ${getScoreColor(session.summary?.overallScore || 0)}`}>
                    {session.summary?.overallScore || 0}%
                  </div>
                  <div className="text-sm text-gray-600">
                    {formatDuration(session.startTime, session.endTime)}
                  </div>
                </div>
              </div>
              
              <div className="mt-3 flex gap-4 text-sm text-gray-600">
                <span>{session.responses?.length || 0} questions</span>
                <span>•</span>
                <span>{session.summary?.strengths?.length || 0} strengths identified</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}