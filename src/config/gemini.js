import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY});

async function chatGemini(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });
  return response.text
}

export default chatGemini;