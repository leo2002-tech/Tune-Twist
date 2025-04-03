import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Music, Home, Info } from 'lucide-react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GeneratePage from './pages/GeneratePage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-black text-white">
        <nav className="bg-black/30 backdrop-blur-sm border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Music className="w-8 h-8 text-purple-400" />
                <span className="ml-2 text-xl font-bold">Tune Twist</span>
              </div>
              <div className="flex space-x-4">
                <Link to="/" className="flex items-center px-3 py-2 rounded-md hover:bg-purple-800/30 transition">
                  <Home className="w-4 h-4 mr-1" />
                  Home
                </Link>
                <Link to="/about" className="flex items-center px-3 py-2 rounded-md hover:bg-purple-800/30 transition">
                  <Info className="w-4 h-4 mr-1" />
                  About
                </Link>
                <Link to="/generate" className="flex items-center px-3 py-2 rounded-md bg-purple-600 hover:bg-purple-700 transition">
                  <Music className="w-4 h-4 mr-1" />
                  Generate
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/generate" element={<GeneratePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;