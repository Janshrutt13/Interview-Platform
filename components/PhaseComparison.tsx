"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import SpotlightCard from './SpotlightCard';

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
        <SpotlightCard className="h-full" spotlightColor="rgba(202, 197, 254, 0.3)">
          <div className="flex flex-col h-full">
            <div className="text-center mb-8">
              <div className="bg-primary-200 text-dark-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold">1</span>
              </div>
              <h2 className="text-3xl font-bold mb-3">AXON Live Practice</h2>
              <p className="text-light-100">Real-time Interview Simulation</p>
            </div>

            <div className="flex-1 space-y-4 mb-8">
              <div className="grid grid-cols-1 gap-4">
                <SpotlightCard className="p-5" spotlightColor="rgba(202, 197, 254, 0.2)">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🎤</span>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Voice Interaction</h3>
                      <p className="text-sm text-white/80">Practice with AI interviewer using real voice conversation</p>
                    </div>
                  </div>
                </SpotlightCard>
                
                <SpotlightCard className="p-5" spotlightColor="rgba(202, 197, 254, 0.2)">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">⚡</span>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Instant Feedback</h3>
                      <p className="text-sm text-white/80">Get immediate scores on confidence, clarity, and pace</p>
                    </div>
                  </div>
                </SpotlightCard>
                
                <SpotlightCard className="p-5" spotlightColor="rgba(202, 197, 254, 0.2)">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🎯</span>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Adaptive Questions</h3>
                      <p className="text-sm text-white/80">AI adjusts difficulty based on your performance</p>
                    </div>
                  </div>
                </SpotlightCard>
                
                <SpotlightCard className="p-5" spotlightColor="rgba(202, 197, 254, 0.2)">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">⏱️</span>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Quick Sessions</h3>
                      <p className="text-sm text-white/80">15-30 minute focused practice sessions</p>
                    </div>
                  </div>
                </SpotlightCard>
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
        </SpotlightCard>

        {/* Phase 2: Dossier */}
        <SpotlightCard className="h-full" spotlightColor="rgba(34, 197, 94, 0.3)">
          <div className="flex flex-col h-full">
            <div className="text-center mb-8">
              <div className="bg-success-100 text-dark-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold">2</span>
              </div>
              <h2 className="text-3xl font-bold mb-3">Strategic Dossier</h2>
              <p className="text-light-100">Deep Analysis & Preparation</p>
            </div>

            <div className="flex-1 space-y-4 mb-8">
              <div className="grid grid-cols-1 gap-4">
                <SpotlightCard className="p-5" spotlightColor="rgba(34, 197, 94, 0.2)">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">📊</span>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Profile Analysis</h3>
                      <p className="text-sm text-white/80">Comprehensive analysis of your resume vs job requirements</p>
                    </div>
                  </div>
                </SpotlightCard>
                
                <SpotlightCard className="p-5" spotlightColor="rgba(34, 197, 94, 0.2)">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🏢</span>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Company Research</h3>
                      <p className="text-sm text-white/80">Tailored questions based on company culture and values</p>
                    </div>
                  </div>
                </SpotlightCard>
                
                <SpotlightCard className="p-5" spotlightColor="rgba(34, 197, 94, 0.2)">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">📝</span>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Question Banks</h3>
                      <p className="text-sm text-white/80">Curated question sets for your specific role and level</p>
                    </div>
                  </div>
                </SpotlightCard>
                
                <SpotlightCard className="p-5" spotlightColor="rgba(34, 197, 94, 0.2)">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">📈</span>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Long-term Planning</h3>
                      <p className="text-sm text-white/80">Multi-week preparation schedules with progress tracking</p>
                    </div>
                  </div>
                </SpotlightCard>
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
        </SpotlightCard>
      </div>

      <SpotlightCard className="max-w-4xl mx-auto" spotlightColor="rgba(255, 255, 255, 0.2)">
        <div>
          <h3 className="text-2xl font-semibold text-center mb-8 text-white">Recommended Approach</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
            <SpotlightCard className="flex-1 max-w-xs px-6 py-4" spotlightColor="rgba(255, 255, 255, 0.15)">
              <div className="text-center">
                <div className="bg-white/25 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2">
                  <span className="font-bold">1</span>
                </div>
                <span className="font-semibold text-white">Start with AXON</span>
              </div>
            </SpotlightCard>
            <div className="text-white/60 text-3xl transform rotate-90 sm:rotate-0">→</div>
            <SpotlightCard className="flex-1 max-w-xs px-6 py-4" spotlightColor="rgba(255, 255, 255, 0.15)">
              <div className="text-center">
                <div className="bg-white/25 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2">
                  <span className="font-bold">2</span>
                </div>
                <span className="font-semibold text-white">Deep dive with Dossier</span>
              </div>
            </SpotlightCard>
          </div>
          <p className="text-center text-white/80 mt-8 text-lg">
            Practice your delivery first, then strategically prepare for specific interviews
          </p>
        </div>
      </SpotlightCard>
    </div>
  );
}