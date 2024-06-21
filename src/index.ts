import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import chatsRouter from './routes/chats';


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3000;

app.use('/api/chats', chatsRouter);

app.all('/', function(req, res) {
  res.json({'error': "not found"});
 });

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
