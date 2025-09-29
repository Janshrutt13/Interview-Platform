"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function PhaseComparison() {
  const router = useRouter();

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold">Choose Your Interview Preparation Phase</h1>
        <p className="text-xl">Two distinct approaches to master your interview skills</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Phase 1: AXON */}
        <div className="card-border h-full">
          <div className="card h-full">
            <div className="p-8 flex flex-col h-full">
              <div className="text-center mb-8">
                <div className="bg-primary-200 text-dark-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold">1</span>
                </div>
                <h2 className="text-3xl font-bold mb-3">AXON Live Practice</h2>
                <p className="text-light-100">Real-time Interview Simulation</p>
              </div>

              <div className="flex-1 space-y-4 mb-8">
                <div className="grid grid-cols-1 gap-4">
                  <div className="card-border">
                    <div className="card">
                      <div className="p-5 flex items-start space-x-3">
                        <span className="text-2xl">🎤</span>
                        <div>
                          <h3 className="font-semibold text-primary-200 mb-1">Voice Interaction</h3>
                          <p className="text-sm text-light-100">Practice with AI interviewer using real voice conversation</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="card-border">
                    <div className="card">
                      <div className="p-5 flex items-start space-x-3">
                        <span className="text-2xl">⚡</span>
                        <div>
                          <h3 className="font-semibold text-primary-200 mb-1">Instant Feedback</h3>
                          <p className="text-sm text-light-100">Get immediate scores on confidence, clarity, and pace</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="card-border">
                    <div className="card">
                      <div className="p-5 flex items-start space-x-3">
                        <span className="text-2xl">🎯</span>
                        <div>
                          <h3 className="font-semibold text-primary-200 mb-1">Adaptive Questions</h3>
                          <p className="text-sm text-light-100">AI adjusts difficulty based on your performance</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="card-border">
                    <div className="card">
                      <div className="p-5 flex items-start space-x-3">
                        <span className="text-2xl">⏱️</span>
                        <div>
                          <h3 className="font-semibold text-primary-200 mb-1">Quick Sessions</h3>
                          <p className="text-sm text-light-100">15-30 minute focused practice sessions</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-auto">
                <Button 
                  onClick={() => router.push('/axon')}
                  className="btn-primary w-full text-lg py-4 mb-3"
                >
                  Start AXON Practice
                </Button>
                <p className="text-sm text-light-100 opacity-80">Perfect for improving communication skills</p>
              </div>
            </div>
          </div>
        </div>

        {/* Phase 2: Dossier */}
        <div className="card-border h-full">
          <div className="card h-full">
            <div className="p-8 flex flex-col h-full">
              <div className="text-center mb-8">
                <div className="bg-success-100 text-dark-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold">2</span>
                </div>
                <h2 className="text-3xl font-bold mb-3">Strategic Dossier</h2>
                <p className="text-light-100">Deep Analysis & Preparation</p>
              </div>

              <div className="flex-1 space-y-4 mb-8">
                <div className="grid grid-cols-1 gap-4">
                  <div className="card-border">
                    <div className="card">
                      <div className="p-5 flex items-start space-x-3">
                        <span className="text-2xl">📊</span>
                        <div>
                          <h3 className="font-semibold text-success-100 mb-1">Profile Analysis</h3>
                          <p className="text-sm text-light-100">Comprehensive analysis of your resume vs job requirements</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="card-border">
                    <div className="card">
                      <div className="p-5 flex items-start space-x-3">
                        <span className="text-2xl">🏢</span>
                        <div>
                          <h3 className="font-semibold text-success-100 mb-1">Company Research</h3>
                          <p className="text-sm text-light-100">Tailored questions based on company culture and values</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="card-border">
                    <div className="card">
                      <div className="p-5 flex items-start space-x-3">
                        <span className="text-2xl">📝</span>
                        <div>
                          <h3 className="font-semibold text-success-100 mb-1">Question Banks</h3>
                          <p className="text-sm text-light-100">Curated question sets for your specific role and level</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="card-border">
                    <div className="card">
                      <div className="p-5 flex items-start space-x-3">
                        <span className="text-2xl">📈</span>
                        <div>
                          <h3 className="font-semibold text-success-100 mb-1">Long-term Planning</h3>
                          <p className="text-sm text-light-100">Multi-week preparation schedules with progress tracking</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-auto">
                <Button 
                  onClick={() => router.push('/')}
                  className="btn-secondary w-full text-lg py-4 mb-3"
                >
                  Create Strategic Dossier
                </Button>
                <p className="text-sm text-light-100 opacity-80">Perfect for comprehensive preparation</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card-border max-w-4xl mx-auto">
        <div className="card">
          <div className="p-8">
            <h3 className="text-2xl font-semibold text-center mb-8">Recommended Approach</h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
              <div className="card-border flex-1 max-w-xs">
                <div className="card">
                  <div className="px-6 py-4 text-center">
                    <div className="bg-primary-200 text-dark-100 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2">
                      <span className="font-bold">1</span>
                    </div>
                    <span className="font-semibold text-primary-200">Start with AXON</span>
                  </div>
                </div>
              </div>
              <div className="text-light-400 text-3xl transform rotate-90 sm:rotate-0">→</div>
              <div className="card-border flex-1 max-w-xs">
                <div className="card">
                  <div className="px-6 py-4 text-center">
                    <div className="bg-success-100 text-dark-100 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2">
                      <span className="font-bold">2</span>
                    </div>
                    <span className="font-semibold text-success-100">Deep dive with Dossier</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-light-100 mt-8 text-lg">
              Practice your delivery first, then strategically prepare for specific interviews
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}