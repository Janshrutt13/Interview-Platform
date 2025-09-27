import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 text-gray-900 dark:text-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-primary">About Insta-Prep</h1>
      <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
        The modern job hunt is broken. <span className="font-semibold text-primary">We're here to fix it.</span>
      </p>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Why Insta-Prep?</h2>
        <p className="mb-4">
          We've all been there. Staring at a job description, feeling that mix of excitement and anxiety. You spend hours tailoring your resume, writing cover letters, and preparing for the inevitable: an interview that feels more like an interrogation than a conversation.
        </p>
        <p className="mb-4">
          You know you're more than a list of skills on a PDF. But proving it under pressure is the toughest challenge of all. The game feels unbalanced, leaving talented people feeling unprepared and undervalued.
        </p>
        <p className="mb-4 font-medium italic">
          What if you could walk into any interview not just prepared, but truly in control?
        </p>
        <p>
          That’s the question that sparked the idea for Insta-Prep. We envisioned a world where every candidate could have access to a personal strategist—an intelligent coach that does more than just offer generic tips. A partner that helps you understand your unique value and gives you the tools to articulate it with confidence.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Your Personal AI Career Strategist</h2>
        <p className="mb-4">
          Insta-Prep is that vision brought to life. It's your AI-powered wingman, designed to transform your preparation from a guessing game into a data-driven strategy.
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            <span className="font-semibold">Personalized Intelligence:</span> Our signature feature, the Insta-Prep Briefing, analyzes your unique resume against any job description to generate a custom interview strategy. It highlights your key selling points, identifies potential gaps, and arms you with insightful questions that show you've done your homework.
          </li>
          <li>
            <span className="font-semibold">Skill-Driven Growth:</span> True confidence comes from competence. Our My Skills hub provides curated learning paths from the best resources on the web, tailored to your specific goals. The Interview Gym lets you run practice drills and simulate mock interviews, turning theory into instinct.
          </li>
          <li>
            <span className="font-semibold">Your Career Command Center:</span> From tracking your applications on a visual pipeline to analyzing your performance over time, Insta-Prep becomes the central hub for your entire job search.
          </li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p className="mb-4">
          Our mission is simple: <span className="font-semibold text-primary">To empower every job seeker with the tools, intelligence, and confidence they need to turn interviews into offers.</span>
        </p>
        <p className="mb-4">
          We believe that the right preparation can change the entire dynamic of an interview, turning it from a test you have to pass into a conversation you get to lead.
        </p>
        <p className="mb-4">
          Proudly built in Pune, India, by a team that's passionate about technology and career empowerment. We're excited to be part of your journey.
        </p>
      </section>
      <div className="text-center mt-10">
        <h3 className="text-xl font-semibold mb-2 text-primary">Welcome to the future of interview readiness.</h3>
        <p className="text-lg font-bold">Welcome to Insta-Prep.</p>
      </div>
    </div>
  );
};

export default AboutPage;
