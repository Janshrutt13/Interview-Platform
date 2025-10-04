"use client";

import React, { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProtectedRoute from "@/components/ProtectedRoute";

interface Recommendation {
  courses: Array<{
    title: string;
    provider: string;
    description: string;
    level: string;
    estimatedHours: string;
    skills: string[];
  }>;
  blogs: Array<{
    title: string;
    author: string;
    description: string;
    readTime: string;
    skills: string[];
  }>;
  videos: Array<{
    title: string;
    creator: string;
    description: string;
    duration: string;
    skills: string[];
  }>;
  books: Array<{
    title: string;
    author: string;
    description: string;
    level: string;
    skills: string[];
  }>;
}

export default function RecommendationsPage() {
  const { currentUser } = useAuth();
  const [recommendations, setRecommendations] = useState<Recommendation | null>(null);
  const [userSkills, setUserSkills] = useState<string[]>([]);
  const [domains, setDomains] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRecommendations = async () => {
    if (!currentUser) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const token = await currentUser.getIdToken();
      const res = await fetch("/api/recommendations", {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      
      const data = await res.json();
      
      if (res.ok) {
        setRecommendations(data.recommendations);
        setUserSkills(data.userSkills);
        setDomains(data.domains);
      } else {
        setError(data.error || "Failed to fetch recommendations");
      }
    } catch (error) {
      setError("Error fetching recommendations");
    }
    
    setLoading(false);
  };

  useEffect(() => {
    fetchRecommendations();
  }, [currentUser]);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto p-8">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-6xl mx-auto p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Learning Recommendations</h1>
          <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-4">
            <p className="text-red-800">{error}</p>
          </div>
          {error.includes("No skills found") && (
            <Button asChild>
              <Link href="/skills">Add Your Skills First</Link>
            </Button>
          )}
        </div>
      </div>
    );
  }

  return (
    <ProtectedRoute>
      <div className="max-w-6xl mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Learning Recommendations</h1>
        <p className="text-gray-600 mb-4">
          Personalized content based on your skills: {userSkills.join(", ")}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {domains.map((domain) => (
            <span key={domain} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              {domain}
            </span>
          ))}
        </div>
      </div>

      {recommendations && (
        <div className="space-y-8">
          {/* Courses */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">📚 Recommended Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recommendations.courses.map((course, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">{course.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">by {course.provider}</p>
                  <p className="text-sm mb-3">{course.description}</p>
                  <div className="flex justify-between items-center text-xs text-gray-500 mb-2">
                    <span>{course.level}</span>
                    <span>{course.estimatedHours}</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {course.skills.map((skill, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Blogs */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">📝 Recommended Blogs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recommendations.blogs.map((blog, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">{blog.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">by {blog.author}</p>
                  <p className="text-sm mb-3">{blog.description}</p>
                  <div className="flex justify-between items-center text-xs text-gray-500 mb-2">
                    <span>{blog.readTime}</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {blog.skills.map((skill, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Videos */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">🎥 Recommended Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recommendations.videos.map((video, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">{video.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">by {video.creator}</p>
                  <p className="text-sm mb-3">{video.description}</p>
                  <div className="flex justify-between items-center text-xs text-gray-500 mb-2">
                    <span>{video.duration}</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {video.skills.map((skill, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Books */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">📖 Recommended Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recommendations.books.map((book, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">{book.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">by {book.author}</p>
                  <p className="text-sm mb-3">{book.description}</p>
                  <div className="flex justify-between items-center text-xs text-gray-500 mb-2">
                    <span>{book.level}</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {book.skills.map((skill, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}
      </div>
    </ProtectedRoute>
  );
}