const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// Converts local file information to a GoogleGenerativeAI.Part object.
function fileToGenerativePart(path, mimeType) {
    return {
        inlineData: {
            data: Buffer.from(fs.readFileSync(path)).toString("base64"),
            mimeType
        },
    };
}

async function run() {
    // For text-and-image input (multimodal), use the gemini-pro-vision model
    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
  
    // Example use case:
    // const prompt = "What's different between these pictures?";
  
    // const imageParts = [
    //   fileToGenerativePart("image1.png", "image/png"),
    //   fileToGenerativePart("image2.jpeg", "image/jpeg"),
    // ];
  
    // const result = await model.generateContent([prompt, ...imageParts]);

    const prompt = "Give a list of 5 options for a simple photo challenge a group of strangers outside can do in 5 minutes. You will later be given these photos and asked to verify that they meet your requirements.";

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
}
  
run();