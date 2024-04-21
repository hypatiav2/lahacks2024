import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyBwH26ZCJ0qza_at3zkXWWG8gXNPSbwfaQ");


export default async function getChallenge() {
    // For text-and-image input (multimodal), use the gemini-pro-vision model
    let model = genAI.getGenerativeModel({ model: "gemini-pro" });
  
    const prompt = "Generate a single photo scavenger hunt game prompt for a group of people to accomplish. For example, taking a picture of a red car or standing in a circle";

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
}