import { Router } from "express";
import { postChat } from '../api/chats.js'
const chatsRouter = Router();

chatsRouter.post('/chats', postChat);

export default chatsRouter;