"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/context/AuthContext";
import { getAuth } from "firebase/auth";

interface Skill {
  name: string;
  domain: string;
}

interface Domain {
  id: string;
  name: string;
  description: string;
}

const domains: Domain[] = [
  {
    id: "frontend",
    name: "Frontend Development",
    description: "UI/UX, React, Vue, Angular, HTML, CSS, JavaScript"
  },
  {
    id: "backend",
    name: "Backend Development", 
    description: "Node.js, Python, Java, APIs, Databases, Server Architecture"
  },
  {
    id: "mobile",
    name: "Mobile Development",
    description: "React Native, Flutter, iOS, Android, Cross-platform"
  },
  {
    id: "devops",
    name: "DevOps & Cloud",
    description: "AWS, Docker, Kubernetes, CI/CD, Infrastructure"
  },
  {
    id: "data",
    name: "Data Science & Analytics",
    description: "Python, R, Machine Learning, SQL, Data Visualization"
  },
  {
    id: "design",
    name: "Design & UX",
    description: "Figma, Adobe Creative Suite, User Research, Prototyping"
  }
];

export default function SkillsPage() {
  const { currentUser } = useAuth();
  const [selectedDomain, setSelectedDomain] = useState<Domain | null>(null);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [currentSkills, setCurrentSkills] = useState<string[]>([]);
  const [skillInput, setSkillInput] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchSkills = async () => {
    if (!currentUser) return;
    setLoading(true);
    try {
      const token = await currentUser.getIdToken();
      const res = await fetch("/api/user/skills", {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      if (res.ok) {
        const data = await res.json();
        setSkills(data.skills || []);
      }
    } catch (error) {
      console.error("Error fetching skills:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  useEffect(() => {
    if (selectedDomain) {
      const domainSkills = skills
        .filter(skill => skill.domain === selectedDomain.id)
        .map(skill => skill.name);
      setCurrentSkills(domainSkills);
    }
  }, [selectedDomain, skills]);

  const handleDomainSelect = (domain: Domain) => {
    setSelectedDomain(domain);
    setSkillInput("");
  };

  const handleAddSkill = async () => {
    if (!skillInput.trim() || !selectedDomain || !currentUser) return;
    
    if (currentSkills.length >= 5) {
      alert("You can only add up to 5 skills per domain.");
      return;
    }

    if (currentSkills.includes(skillInput.trim())) {
      alert("This skill already exists in this domain.");
      return;
    }

    try {
      const token = await currentUser.getIdToken();

      
      const res = await fetch("/api/user/skills", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ 
          skill: skillInput.trim(),
          domain: selectedDomain.id 
        }),
      });

      const responseData = await res.json();

      if (res.ok) {
        setSkillInput("");
        fetchSkills();
      } else {
        alert(`Failed to add skill: ${responseData.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error("Error adding skill:", error);
      alert(`Error adding skill: ${error}`);
    }
  };

  const handleDeleteSkill = async (skillName: string) => {
    if (!selectedDomain || !currentUser) return;

    try {
      const token = await currentUser.getIdToken();
      const res = await fetch("/api/user/skills", {
        method: "DELETE",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ 
          skill: skillName,
          domain: selectedDomain.id 
        }),
      });

      if (res.ok) {
        fetchSkills();
      }
    } catch (error) {
      console.error("Error deleting skill:", error);
    }
  };

  const handleBackToDomains = () => {
    setSelectedDomain(null);
    setCurrentSkills([]);
    setSkillInput("");
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-8">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">My Skills</h1>
        <p className="text-gray-600">
          {selectedDomain 
            ? `Add up to 5 skills in ${selectedDomain.name}`
            : "Choose your primary domain and add your top 5 skills"
          }
        </p>
      </div>

      {!selectedDomain ? (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold mb-4">Select Your Primary Domain</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {domains.map((domain) => {
              const domainSkillCount = skills.filter(skill => skill.domain === domain.id).length;
              
              return (
                <div
                  key={domain.id}
                  onClick={() => handleDomainSelect(domain)}
                  className="card-border p-6 cursor-pointer hover:shadow-lg transition-all duration-200 relative"
                >
                  <div className="card h-full">
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-semibold">{domain.name}</h3>
                        {domainSkillCount > 0 && (
                          <span className="bg-primary-200 text-dark-100 px-2 py-1 rounded-full text-xs font-medium">
                            {domainSkillCount}/5
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-400 mb-4">{domain.description}</p>
                      <Button className="btn-primary w-full">
                        {domainSkillCount > 0 ? "Manage Skills" : "Add Skills"}
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {skills.length > 0 && (
            <div className="mt-12">
              <h2 className="text-xl font-semibold mb-4">Your Skills Overview</h2>
              <div className="space-y-4">
                {domains.map((domain) => {
                  const domainSkills = skills.filter(skill => skill.domain === domain.id);
                  if (domainSkills.length === 0) return null;

                  return (
                    <div key={domain.id} className="card-border p-4">
                      <div className="card">
                        <div className="p-4">
                          <h3 className="font-semibold mb-2">{domain.name}</h3>
                          <div className="flex flex-wrap gap-2">
                            {domainSkills.map((skill) => (
                              <span
                                key={skill.name}
                                className="bg-gray-800 text-white rounded-full px-3 py-1 text-sm"
                              >
                                {skill.name}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex items-center gap-4 mb-6">
            <Button onClick={handleBackToDomains} variant="outline">
              ← Back to Domains
            </Button>
            <div>
              <h2 className="text-xl font-semibold">{selectedDomain.name}</h2>
              <p className="text-sm text-gray-600">{selectedDomain.description}</p>
            </div>
          </div>

          <div className="card-border">
            <div className="card">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">
                  Add Skills ({currentSkills.length}/5)
                </h3>
                
                {currentSkills.length < 5 ? (
                  <div className="flex gap-2 mb-4">
                    <Input
                      value={skillInput}
                      onChange={(e) => setSkillInput(e.target.value)}
                      placeholder={`Add a ${selectedDomain.name.toLowerCase()} skill...`}
                      className="flex-1"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          handleAddSkill();
                        }
                      }}
                    />
                    <Button onClick={handleAddSkill} className="btn-primary">
                      Add Skill
                    </Button>
                  </div>
                ) : (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 mb-4">
                    <p className="text-yellow-800 text-sm">
                      You've reached the maximum of 5 skills for this domain. Remove a skill to add a new one.
                    </p>
                  </div>
                )}

                <div className="space-y-2">
                  <Label className="text-sm font-medium">Your {selectedDomain.name} Skills:</Label>
                  {currentSkills.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {currentSkills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center bg-gray-800 text-white rounded-full px-3 py-1 text-sm font-medium"
                        >
                          {skill}
                          <button
                            className="ml-2 text-gray-300 hover:text-red-400 focus:outline-none"
                            onClick={() => handleDeleteSkill(skill)}
                            aria-label={`Remove ${skill}`}
                            type="button"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-sm">No skills added yet for this domain.</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="card-border">
            <div className="card">
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Progress</span>
                  <span className="text-sm text-gray-600">{currentSkills.length}/5 skills</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary-200 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(currentSkills.length / 5) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}