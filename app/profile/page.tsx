"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface PillProps {
  skill: string;
  onDelete: () => void;
}

const Pill: React.FC<PillProps> = ({ skill, onDelete }) => (
  <span className="inline-flex items-center bg-gray-800 text-white rounded-full px-3 py-1 text-sm font-medium mr-2 mb-2">
    {skill}
    <button
      className="ml-2 text-gray-300 hover:text-red-400 focus:outline-none"
      onClick={onDelete}
      aria-label={`Remove ${skill}`}
      type="button"
    >
      ×
    </button>
  </span>
);

interface Dossier {
  id?: string;
  role: string;
  company: string;
  dateGenerated: string;
  content?: string;
  [key: string]: any;
}

interface DossierCardProps {
  dossier: Dossier;
  onClick: () => void;
}

const DossierCard: React.FC<DossierCardProps> = ({ dossier, onClick }) => (
  <div
    className="card-border p-4 mb-4 cursor-pointer hover:shadow-lg"
    onClick={onClick}
    role="button"
    tabIndex={0}
  >
    <div className="font-bold text-lg">{dossier.role}</div>
    <div className="text-gray-600">{dossier.company}</div>
    <div className="text-xs text-gray-400">{dossier.dateGenerated}</div>
  </div>
);

interface Profile {
  skills: Array<{ name: string; domain: string }>;
  dossiers: Dossier[];
  [key: string]: any;
}

export default function ProfilePage() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [skillInput, setSkillInput] = useState<string>("");
  const [modalDossier, setModalDossier] = useState<Dossier | null>(null);

  const fetchProfile = async () => {
    setLoading(true);
    const res = await fetch("/api/user/profile");
    if (res.ok) {
      setProfile(await res.json());
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleAddSkill = async () => {
    if (!skillInput.trim()) return;
    await fetch("/api/user/skills", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ skill: skillInput.trim(), domain: "general" }),
    });
    setSkillInput("");
    fetchProfile();
  };

  const handleDeleteSkill = async (skillName: string, domain: string) => {
    await fetch("/api/user/skills", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ skill: skillName, domain }),
    });
    fetchProfile();
  };

  if (loading) return <div className="p-8">Loading...</div>;
  if (!profile) return <div className="p-8">Failed to load profile.</div>;

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">My Profile</h1>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">My Skills</h2>
        <div className="flex gap-2 mb-4">
          <Input
            value={skillInput}
            onChange={e => setSkillInput(e.target.value)}
            placeholder="Add a skill..."
            className="w-64"
            onKeyDown={e => { if (e.key === 'Enter') handleAddSkill(); }}
          />
          <Button onClick={handleAddSkill}>Add Skill</Button>
        </div>
        <div className="flex flex-wrap">
          {profile.skills && profile.skills.length > 0 ? (
            profile.skills.map((skill, index) => (
              <Pill 
                key={`${skill.name}-${skill.domain}-${index}`} 
                skill={typeof skill === 'string' ? skill : skill.name} 
                onDelete={() => handleDeleteSkill(
                  typeof skill === 'string' ? skill : skill.name,
                  typeof skill === 'string' ? 'general' : skill.domain
                )} 
              />
            ))
          ) : (
            <span className="text-gray-500">No skills added yet.</span>
          )}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">My Dossiers</h2>
        <div>
          {profile.dossiers && profile.dossiers.length > 0 ? (
            profile.dossiers.map((dossier, idx) => (
              <DossierCard key={dossier.id || idx} dossier={dossier} onClick={() => setModalDossier(dossier)} />
            ))
          ) : (
            <span className="text-gray-500">No dossiers saved yet.</span>
          )}
        </div>
      </section>

      {modalDossier && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 rounded-lg p-8 max-w-lg w-full relative">
            <button
              className="absolute top-2 right-2 text-2xl text-gray-400 hover:text-red-400"
              onClick={() => setModalDossier(null)}
              aria-label="Close"
              type="button"
            >
              ×
            </button>
            <h3 className="text-2xl font-bold mb-2">{modalDossier.role}</h3>
            <div className="mb-1 text-gray-600">{modalDossier.company}</div>
            <div className="mb-4 text-xs text-gray-400">{modalDossier.dateGenerated}</div>
            <pre className="whitespace-pre-wrap text-sm bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
              {modalDossier.content || JSON.stringify(modalDossier, null, 2)}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}