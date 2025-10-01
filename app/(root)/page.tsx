import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import Chatbot from "@/components/Chatbot";
import PhaseComparison from "@/components/PhaseComparison";
import {getCurrentUser} from "@/lib/actions/auth.action";
import Beams from "@/components/Beams";


async function Home() {
    const user = await getCurrentUser();

    return (
        <div className="relative min-h-screen">
            {/* Background Beams */}
            <div className="fixed inset-0 w-full h-full z-0">
                <Beams
                    beamWidth={2}
                    beamHeight={15}
                    beamNumber={12}
                    lightColor="#CAC5FE"
                    speed={2}
                    noiseIntensity={1.75}
                    scale={0.2}
                    rotation={0}
                />
            </div>

            {/* Content with transparent backgrounds */}
            <div className="relative z-10">
                <section className="flex flex-row items-center justify-between px-16 py-12 max-sm:px-4 mx-16 max-sm:mx-4 my-12 bg-white/3 backdrop-blur-sm border border-white/10 rounded-3xl">
                    <div className="flex flex-col gap-6 max-w-lg">
                        <h2 className="text-white text-4xl font-bold">Master Your Interview Skills</h2>
                        <p className="text-lg text-white/80">
                            Two-phase approach: Practice with AXON for real-time feedback, then create strategic dossiers for deep preparation
                        </p>

                        <div className="flex gap-4 max-sm:flex-col">
                            <Button asChild className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 rounded-full font-bold px-6">
                                <Link href="/axon">Start AXON Practice</Link>
                            </Button>
                            <Button asChild variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 rounded-full">
                                <Link href="/interview">Create Dossier</Link>
                            </Button>
                        </div>
                    </div>

                    <Image
                        src="/robot.png"
                        alt="robo-dude"
                        width={400}
                        height={400}
                        className="opacity-90 max-sm:hidden"
                    />
                </section>

                <div className="mx-16 max-sm:mx-4 my-12">
                    <PhaseComparison />
                </div>

                <section className="flex flex-col gap-6 mt-8 bg-white/3 backdrop-blur-sm border border-white/10 p-8 rounded-2xl mx-16 max-sm:mx-4">
                    <h2 className="text-white text-3xl font-bold">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white/5 backdrop-blur-sm border border-white/15 p-6 rounded-2xl">
                            <h3 className="text-xl font-semibold mb-3 text-white">1. Input Your Data</h3>
                            <p className="text-white/80">Provide your resume, the job description, company name, and any specific concerns you have about the interview.</p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm border border-white/15 p-6 rounded-2xl">
                            <h3 className="text-xl font-semibold mb-3 text-white">2. AI Analysis</h3>
                            <p className="text-white/80">Our AI analyzes your qualifications against the job requirements and identifies your key selling points.</p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm border border-white/15 p-6 rounded-2xl">
                            <h3 className="text-xl font-semibold mb-3 text-white">3. Get Your Dossier</h3>
                            <p className="text-white/80">Receive a comprehensive interview dossier with strategic questions, gap analysis, and closing statements.</p>
                        </div>
                    </div>
                </section>

                <section className="flex flex-col gap-6 mt-8 bg-white/3 backdrop-blur-sm border border-white/10 p-8 rounded-2xl mx-16 max-sm:mx-4">
                    <h2 className="text-white text-3xl font-bold">Practice with Coach</h2>
                    <p className="text-white/70">Get personalized interview coaching and practice with our AI assistant</p>
                    <Chatbot />
                </section>
            </div>
        </div>
    );
}

export default Home;