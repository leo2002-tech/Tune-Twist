const { generateMusicFromPrompt } = require('./musicGenerator');

async function testAPI() {
  try {
    console.log('Testing API connection...');
    const result = await generateMusicFromPrompt('upbeat electronic music with drums');
    console.log('Success!', result);
  } catch (error) {
    console.error('Test failed:', error);
  }
}

testAPI();