import { GoogleGenerativeAI } from "@google/generative-ai";


export function postChat(req, res){
   const message = req.body.message;
   const run = async function() {
     const genAI = new GoogleGenerativeAI('AIzaSyDB2XZJwiiBp1SEylnyyLhNI9e_dxxJZzY');
       const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
       const prompt = message;
       const result = await model.generateContent(prompt);
       const response = await result.response;
       const text = response.text();
      res.status(200).send(text);
   } 
   try {
      run();
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
}