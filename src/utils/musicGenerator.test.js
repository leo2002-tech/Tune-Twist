import { config } from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { generateMusicFromPrompt } from './musicGenerator.js';

// Initialize dotenv
config();

// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function testAPI() {
  try {
    console.log('Testing API connection...');
    console.log('API Key:', process.env.VITE_RIFFUSION_API_KEY?.substring(0, 10) + '...');
    console.log('Base URL:', process.env.VITE_RIFFUSION_BASE_URL);
    
    const result = await generateMusicFromPrompt('upbeat electronic music with drums');
    console.log('Success!', result);
  } catch (error) {
    console.error('Test failed:', error);
  }
}

// Run the test
testAPI();