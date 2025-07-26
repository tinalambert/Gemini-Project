import { GoogleGenAI } from "@google/genai";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const GEMINI_API_KEY = "AIzaSyDvlTk629c1H6mEeGAE1hv5ovGPCtTkTeY";
const ai = new GoogleGenAI({apiKey: GEMINI_API_KEY});

async function runChat(prompt) {
 

  const response = await ai.models.generateContent({
   model: 'gemini-2.0-flash-001',
   //  contents: 'Why is the sky blue?',
   contents: (prompt)
  })
  console.log(response.text);
  return response.text;
}

export default runChat;
