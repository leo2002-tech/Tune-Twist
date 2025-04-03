import React from 'react';
import { Link } from 'react-router-dom';
import { Music, Sparkles } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=1200"
          alt="Music Studio"
          className="rounded-2xl w-full max-w-4xl mx-auto opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>
      
      <div className="mt-8 space-y-6 max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Transform Your Ideas Into Music with the help of AI
        </h1>
        <p className="text-xl text-gray-300">
         Turn your creative prompts into beautiful melodies.
        </p>
        <Link
          to="/generate"
          className="inline-flex items-center px-6 py-3 text-lg font-medium rounded-full bg-purple-600 hover:bg-purple-700 transition"
        >
          <Sparkles className="w-5 h-5 mr-2" />
          Start Creating
        </Link>
      </div>
    </div>
  );
}