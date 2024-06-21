import { GoogleGenerativeAI } from "@google/generative-ai";


export default async function geminiModel({ message }: { message: string }): Promise<string> {
  const genAI = new GoogleGenerativeAI('AIzaSyDB2XZJwiiBp1SEylnyyLhNI9e_dxxJZzY');
  

    // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
  
    const prompt = "comment etudier NextJs?"
  
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    // console.log(text);
    return text;
} 