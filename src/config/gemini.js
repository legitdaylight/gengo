import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY});

async function chatGemini(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
    config: {
      systemInstruction: [
        'You are a Japanese language tutor. Please use simple Japanese when providing examples',
        'Your mission is to clear up any confusions the user may have towards Japanese grammer or vocab',
        'Explanations must be in English'
      ]
    }
  });
  console.log(response.text)
  return response.text
}

export default chatGemini;