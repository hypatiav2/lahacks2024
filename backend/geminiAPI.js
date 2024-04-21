const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");

const genAI = new GoogleGenerativeAI('AIzaSyBwH26ZCJ0qza_at3zkXWWG8gXNPSbwfaQ');

// Converts local file information to a GoogleGenerativeAI.Part object.
function fileToGenerativePart(path, mimeType) {
    return {
        inlineData: {
            data: Buffer.from(fs.readFileSync(path)).toString("base64"),
            mimeType
        },
    };
}

async function getChallenge() {
    // For text-and-image input (multimodal), use the gemini-pro-vision model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  
    const prompt = "Generate a single photo scavenger hunt game prompt for a group of people to accomplish. For example, taking a picture of a red car or standing in a circle";

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
}

async function evaluate(prompt) {
    // For text-and-image input (multimodal), use the gemini-pro-vision model
    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
    prompt = "In a single word, yes or no, does this picture successfully accomplish the photo scavenger hunt prompt: " + prompt;
  
    const imageParts = [
      fileToGenerativePart("image2.jpeg", "image/jpeg"),
    ];
  
    const result = await model.generateContent([prompt, ...imageParts]);
    const response = await result.response;
    const text = response.text();
    console.log(text);
}

async function run() {
    let prompt = await getChallenge();
    console.log(prompt);
    evaluate(prompt);
    console.log("done");
}

run();