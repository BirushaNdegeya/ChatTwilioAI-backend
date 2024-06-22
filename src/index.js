import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import chatsRouter from './routes/chats.js';
import registerRouter from './routes/register.js';
import loginRouter from './routes/login.js';


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3000;

app.use('/api', chatsRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);

app.all('/', function (req, res) {
  res.json({ 'error': "not found" });
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
