import { Music2, Mic, Speaker, Stars, Contact } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">About TuneTwist</h1>
        <p className="text-xl text-gray-300">
          Empowering creativity through artificial intelligence and music generation
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm">
          <div className="flex items-center mb-4">
            <Music2 className="w-8 h-8 text-purple-400" />
            <h2 className="text-2xl font-semibold ml-3">Our Mission</h2>
          </div>
          <p className="text-gray-300">
            Our major goal is to let users use AI to create music by simply putting a promt description.
          </p>
        </div>

        <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm">
          <div className="flex items-center mb-4">
            <Stars className="w-8 h-8 text-purple-400" />
            <h2 className="text-2xl font-semibold ml-3">Technology</h2>
          </div>
          <p className="text-gray-300">
            Since this is our beta website we plan on using API but we still are training AI models (NVIDIA LLMA),
            we transform text descriptions into melodious music.
          </p>
        </div>

        <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm">
          <div className="flex items-center mb-4">
            <Mic className="w-8 h-8 text-purple-400" />
            <h2 className="text-2xl font-semibold ml-3">How It Works</h2>
          </div>
          <p className="text-gray-300">
            Simply describe your musical vision and write on the description, and our AI will generate unique
            compositions that match your creative direction.
          </p>
        </div>

        <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm">
          <div className="flex items-center mb-4">
            <Speaker className="w-8 h-8 text-purple-400" />
            <h2 className="text-2xl font-semibold ml-3">Quality</h2>
          </div>
          <p className="text-gray-300">
            Each generated piece is unique and crafted with attention to musical
            theory and composition principles.
          </p>
        </div>
        <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm">
  <div className="flex items-center mb-4">
    <Contact className="w-8 h-8 text-purple-400" />
    <h2 className="text-2xl font-semibold ml-3">Contact Us</h2>
  </div>
  <p className="text-gray-300">
    <a
      href="mailto:tunetwist360@gmail.com"
      className="text-purple-400 hover:underline"
    >
      tunetwist360@gmail.com
    </a>
    <div className="mt-3 flex space-x-4">
    <a href="https://twitter.com/tunetwist" className="text-purple-400 hover:underline">Twitter</a>
    </div>
    <div className="mt-3 flex space-x-4">
    <a href="https://discord.gg/tunetwist" className="text-purple-400 hover:underline">Discord</a>
    </div>
    <div className="mt-3 flex space-x-4">
    <a href="https://www.instagram.com/tunetwist" className="text-purple-400 hover:underline">Instagram</a>
  </div>
  </p>
</div>
<div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm text-center">
  <h2 className="text-2xl font-semibold mb-4">Join Our Beta Program</h2>
  <p className="text-gray-300 mb-4">
    Want to be the first to test our newest AI-generated music features? Sign up below!
  </p>
  <input 
    type="email" 
    placeholder="Enter your email" 
    className="w-full p-3 rounded-md text-black"
  />
  <button className="mt-3 bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg">
    Sign Up   
  </button>
</div>

      </div>
    </div>
  );
}