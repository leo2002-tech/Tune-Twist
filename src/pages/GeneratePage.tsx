import React, { useState } from 'react';
import { Music, Loader2, Download, Share2, Info } from 'lucide-react';
import { generateMusicFromPrompt } from '../utils/musicGenerator';

/* 
* Original Implementation
* Created: Prior to March 27, 2024
*/
// Original code commented out
/*
export default function GeneratePage() {
  // ...existing state and handleSubmit code...
}
*/

/*
* Updated Implementation with Modern UI
* Created: March 27, 2024
*/
export default function GeneratePage() {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedMusic, setGeneratedMusic] = useState<string | null>(null);
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    setGeneratedMusic(null);
    setSelectedGenre(null);

    try {
      const result = await generateMusicFromPrompt(prompt);
      setGeneratedMusic(result.url);
      setSelectedGenre(result.genre);
    } catch (error) {
      console.error('Error:', error);
      // Show a more user-friendly error message
      setGeneratedMusic('Error: Unable to generate music at this time. Please try again later.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a1a] to-black px-4 py-8">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Create Music with AI
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Transform your ideas into incredible music. Just describe what you want to hear.
          </p>
        </div>

        {/* Main Creation Section */}
        <div className="bg-[#1a1a1a]/50 backdrop-blur-xl rounded-2xl p-8 border border-white/5 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label htmlFor="prompt" className="text-xl font-semibold text-white">
                  Describe Your Music
                </label>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Info className="w-4 h-4" />
                  <span>Be descriptive about the style and mood</span>
                </div>
              </div>
              
              <textarea
                id="prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Example: Create an energetic electronic dance track with pulsing synthesizers, driving bass, and uplifting melodies..."
                className="w-full h-48 p-6 text-lg rounded-xl bg-black/30 border border-white/10 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all text-white placeholder-gray-500"
              />
            </div>

            <button
              type="submit"
              disabled={isGenerating || !prompt.trim()}
              className="w-full group flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-[1.02]"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-6 h-6 mr-3 animate-spin" />
                  Creating Your Music...
                </>
              ) : (
                <>
                  <Music className="w-6 h-6 mr-3 group-hover:animate-pulse" />
                  Generate Music
                </>
              )}
            </button>
          </form>
        </div>

        {/* Results Section */}
        {(generatedMusic || isGenerating) && (
          <div className="bg-[#1a1a1a]/50 backdrop-blur-xl rounded-2xl p-8 border border-white/5 shadow-xl">
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">Your Generated Track</h2>
                {selectedGenre && (
                  <span className="px-4 py-2 rounded-full text-sm font-medium bg-purple-500/20 text-purple-300 border border-purple-500/20">
                    {selectedGenre}
                  </span>
                )}
              </div>

              {generatedMusic ? (
                typeof generatedMusic === 'string' && generatedMusic.startsWith('http') ? (
                  <div className="space-y-8">
                    {/* Visualizer */}
                    <div className="h-40 bg-black/40 rounded-xl overflow-hidden flex items-center justify-center border border-white/5">
                      <div className="flex items-end justify-center gap-1 h-full w-full px-4">
                        {[...Array(50)].map((_, i) => (
                          <div
                            key={i}
                            className="w-1.5 bg-gradient-to-t from-purple-500 to-pink-500"
                            style={{
                              height: `${Math.random() * 100}%`,
                              animation: `pulse ${Math.random() * 1 + 0.5}s ease-in-out infinite`,
                              animationDelay: `${i * 0.05}s`
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Audio Controls */}
                    <div className="bg-black/40 rounded-xl p-4 border border-white/5">
                      <audio
                        controls
                        src={generatedMusic}
                        className="w-full"
                      />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <a
                        href={generatedMusic}
                        download
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl font-medium transition-all duration-300 transform hover:scale-[1.02]"
                      >
                        <Download className="w-5 h-5" />
                        Download Track
                      </a>
                      <button
                        onClick={() => navigator.clipboard.writeText(generatedMusic)}
                        className="px-4 py-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300"
                        title="Share"
                      >
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center py-12">
                    <p className="text-red-400 text-lg">{generatedMusic}</p>
                  </div>
                )
              ) : (
                <div className="text-center py-16">
                  <Loader2 className="w-12 h-12 animate-spin mx-auto mb-4 text-purple-500" />
                  <p className="text-gray-400 text-lg">Creating your masterpiece...</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
