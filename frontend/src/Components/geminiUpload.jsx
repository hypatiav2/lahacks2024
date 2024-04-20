import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyBwH26ZCJ0qza_at3zkXWWG8gXNPSbwfaQ");


// Converts a File object to a GoogleGenerativeAI.Part object.
async function fileToGenerativePart(file) {
    const base64EncodedDataPromise = new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(',')[1]);
      reader.readAsDataURL(file);
    });
    return {
      inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
    };
  }
  

  
export default async function CheckPhoto(challenge) {
    let prompt = await challenge;
    let full_prompt = "Does this picture successfully accomplish the photo scavenger hunt prompt: " + prompt;
    
    console.log(full_prompt);

    // For text-and-images input (multimodal), use the gemini-pro-vision model
    let model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
      
    const fileInputEl = document.querySelector("input[type=file]");
    const imageParts = await Promise.all(
      [...fileInputEl.files].map(fileToGenerativePart)
    );
  
    const result = await model.generateContent([full_prompt, ...imageParts]);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    document.getElementById("status").innerText = text;

  }
  