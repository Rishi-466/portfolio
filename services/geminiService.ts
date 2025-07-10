
import { GoogleGenAI } from "@google/genai";

// Ensure the API key is available as an environment variable
if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateBio = async (keywords: string): Promise<string> => {
    if (!keywords.trim()) {
        return "Please provide some keywords to generate a bio.";
    }

    try {
        const result = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `Based on the following keywords, write a compelling and professional portfolio bio of approximately 50-60 words: "${keywords}"`,
            config: {
                systemInstruction: "You are an expert copywriter specializing in creating impactful and concise professional biographies for tech portfolios. Your tone should be confident, professional, and engaging.",
                temperature: 0.7,
                topP: 1,
                topK: 32,
            }
        });
        
        return result.text;
    } catch (error) {
        console.error("Error generating bio with Gemini API:", error);
        return "Sorry, I couldn't generate a bio at this moment. Please try again later.";
    }
};
