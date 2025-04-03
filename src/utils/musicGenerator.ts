import { config } from 'dotenv';
config();

const BASE_URL = import.meta.env.VITE_RIFFUSION_BASE_URL;
const API_KEY = import.meta.env.VITE_RIFFUSION_API_KEY;

interface RiffusionRequest {
  prompt: string;
  seed?: number;
}

interface RiffusionResponse {
  status: string;
  request_id: string;
  message?: string;
  urls?: string[];
}

export const generateMusicFromPrompt = async (prompt: string): Promise<{
  url: string;
  genre: string;
}> => {
  try {
    // First API call to generate music
    const generateResponse = await fetch(`${BASE_URL}/generate-music`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY
      },
      body: JSON.stringify({
        prompt: prompt,
        seed: Math.floor(Math.random() * 100000)
      })
    });

    if (!generateResponse.ok) {
      const errorText = await generateResponse.text();
      console.error('Generation API Error:', {
        status: generateResponse.status,
        statusText: generateResponse.statusText,
        body: errorText
      });
      throw new Error(`API Error: ${generateResponse.status} ${generateResponse.statusText}`);
    }

    const generateData: RiffusionResponse = await generateResponse.json();
    
    if (!generateData.request_id) {
      throw new Error('No request ID received from generation endpoint');
    }

    // Poll the check-generation endpoint until complete
    let attempts = 0;
    const maxAttempts = 30; // 30 seconds timeout
    while (attempts < maxAttempts) {
      const checkResponse = await fetch(`${BASE_URL}/check-generation/${generateData.request_id}`, {
        headers: {
          'x-api-key': API_KEY
        }
      });

      if (!checkResponse.ok) {
        throw new Error(`Check generation failed: ${checkResponse.status}`);
      }

      const checkData: RiffusionResponse = await checkResponse.json();

      if (checkData.status === 'success' && checkData.urls && checkData.urls.length > 0) {
        const genres = ['pop', 'rock', 'metal', 'jazz', 'classical', 'country', 'electronic'];
        const detectedGenre = genres.find(genre => prompt.toLowerCase().includes(genre)) || 'custom';

        return {
          url: checkData.urls[0],
          genre: detectedGenre
        };
      }

      if (checkData.status === 'failed') {
        throw new Error(checkData.message || 'Generation failed');
      }

      // Wait 1 second before next attempt
      await new Promise(resolve => setTimeout(resolve, 1000));
      attempts++;
    }

    throw new Error('Generation timed out');
  } catch (error) {
    console.error('Error generating music:', error);
    throw new Error(
      error instanceof Error 
        ? error.message 
        : 'Failed to generate music. Please try again.'
    );
  }
};