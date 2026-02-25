
import { GoogleGenAI } from "@google/genai";

export async function getEngineeringAdvice(prompt: string) {
  // Initialize the API client inside the function to ensure the latest API key is used
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      // Use gemini-2.5-flash-lite-latest for low-latency, high-speed responses
      model: "gemini-2.5-flash-lite-latest",
      contents: prompt,
      config: {
        systemInstruction: "Tu es un expert senior en génie civil (MBCC IA). Réponds de manière professionnelle, technique et concise en français à la question de l'utilisateur concernant un projet de construction ou une problématique technique d'ingénierie.",
        temperature: 0.7,
        topP: 0.9,
      }
    });
    // Access response.text property (not a method) and handle potential undefined
    return response.text || "Désolé, je ne peux pas générer de réponse pour le moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Désolé, je rencontre une difficulté technique pour analyser votre demande. Veuillez réessayer plus tard.";
  }
}
