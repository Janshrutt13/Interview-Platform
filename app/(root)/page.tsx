import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import Chatbot from "@/components/Chatbot";
import {getCurrentUser} from "@/lib/actions/auth.action";


async function Home() {
    const user = await getCurrentUser();

    return (
        <>
            <section className="card-cta">
                <div className="flex flex-col gap-6 max-w-lg">
                    <h2>Get Interview-Ready with AI-Powered Strategy</h2>
                    <p className="text-lg">
                        Generate personalized interview dossiers with strategic insights and preparation materials
                    </p>

                    <Button asChild className="btn-primary max-sm:w-full">
                        <Link href="/interview">Generate Interview Dossier</Link>
                    </Button>
                </div>

                <Image
                    src="/robot.png"
                    alt="robo-dude"
                    width={400}
                    height={400}
                    className="max-sm:hidden"
                />
            </section>

            <section className="flex flex-col gap-6 mt-8">
                <h2>How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="card-border p-6">
                        <h3 className="text-xl font-semibold mb-3">1. Input Your Data</h3>
                        <p>Provide your resume, the job description, company name, and any specific concerns you have about the interview.</p>
                    </div>
                    <div className="card-border p-6">
                        <h3 className="text-xl font-semibold mb-3">2. AI Analysis</h3>
                        <p>Our AI analyzes your qualifications against the job requirements and identifies your key selling points.</p>
                    </div>
                    <div className="card-border p-6">
                        <h3 className="text-xl font-semibold mb-3">3. Get Your Dossier</h3>
                        <p>Receive a comprehensive interview dossier with strategic questions, gap analysis, and closing statements.</p>
                    </div>
                </div>
            </section>

            <section className="flex flex-col gap-6 mt-8">
                <h2>Practice with Coach</h2>
                <p className="text-gray-600">Get personalized interview coaching and practice with our AI assistant</p>
                <Chatbot />
            </section>
        </>
    );
}

export default Home;