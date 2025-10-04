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
      <div className="max-w-7xl mx-auto p-8 bg-gray-950 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Learning Recommendations</h1>
        <p className="text-gray-400 mb-4">
          Personalized content based on your skills: {userSkills.join(", ")}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {domains.map((domain) => (
            <span key={domain} className="bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-sm">
              {domain}
            </span>
          ))}
        </div>
      </div>

      {recommendations && (
        <div className="space-y-12">
          {/* Courses */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">📚 Recommended Courses</h2>
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
              {recommendations.courses.slice(0, 3).map((course, index) => (
                <div key={index} className="flex-shrink-0 w-80 bg-gray-900 border border-gray-700 rounded-xl overflow-hidden hover:border-blue-500 transition-colors">
                  <div className="h-48 bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center">
                    <div className="text-6xl text-white opacity-80">📚</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">{course.level}</span>
                      <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs">{course.estimatedHours}</span>
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2">{course.title}</h3>
                    <p className="text-gray-400 text-sm mb-2">by {course.provider}</p>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{course.description}</p>
                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                      onClick={() => window.open(`https://www.google.com/search?q=${encodeURIComponent(course.title + ' ' + course.provider)}`, '_blank')}
                    >
                      View Course
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Blogs */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">📝 Recommended Blogs</h2>
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
              {recommendations.blogs.slice(0, 3).map((blog, index) => (
                <div key={index} className="flex-shrink-0 w-80 bg-gray-900 border border-gray-700 rounded-xl overflow-hidden hover:border-green-500 transition-colors">
                  <div className="h-48 bg-gradient-to-br from-green-600 to-teal-700 flex items-center justify-center">
                    <div className="text-6xl text-white opacity-80">📝</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium">{blog.readTime}</span>
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2">{blog.title}</h3>
                    <p className="text-gray-400 text-sm mb-2">by {blog.author}</p>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{blog.description}</p>
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                      onClick={() => window.open(`https://www.google.com/search?q=${encodeURIComponent(blog.title + ' ' + blog.author)}`, '_blank')}
                    >
                      Read Blog
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Videos */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">🎥 Recommended Videos</h2>
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
              {recommendations.videos.slice(0, 3).map((video, index) => (
                <div key={index} className="flex-shrink-0 w-80 bg-gray-900 border border-gray-700 rounded-xl overflow-hidden hover:border-red-500 transition-colors">
                  <div className="h-48 bg-gradient-to-br from-red-600 to-pink-700 flex items-center justify-center">
                    <div className="text-6xl text-white opacity-80">🎥</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-red-600 text-white px-2 py-1 rounded-full text-xs font-medium">{video.duration}</span>
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2">{video.title}</h3>
                    <p className="text-gray-400 text-sm mb-2">by {video.creator}</p>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{video.description}</p>
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 text-white"
                      onClick={() => window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(video.title + ' ' + video.creator)}`, '_blank')}
                    >
                      Watch Video
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Books */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">📖 Recommended Books</h2>
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
              {recommendations.books.slice(0, 3).map((book, index) => (
                <div key={index} className="flex-shrink-0 w-80 bg-gray-900 border border-gray-700 rounded-xl overflow-hidden hover:border-purple-500 transition-colors">
                  <div className="h-48 bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center">
                    <div className="text-6xl text-white opacity-80">📖</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-medium">{book.level}</span>
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2">{book.title}</h3>
                    <p className="text-gray-400 text-sm mb-2">by {book.author}</p>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{book.description}</p>
                    <Button 
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                      onClick={() => window.open(`https://www.google.com/search?q=${encodeURIComponent(book.title + ' ' + book.author + ' book')}`, '_blank')}
                    >
                      View Book
                    </Button>
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