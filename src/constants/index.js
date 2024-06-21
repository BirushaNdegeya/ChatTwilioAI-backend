import dotenv from 'dotenv';

dotenv.config();
const constants = {
   api_key: process.env.GEMINI_KEY,
}

export default constants;