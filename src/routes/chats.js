import { Router } from "express";

const chatsRouter = Router();

chatsRouter.get("/", (req, res) => {
  res.json({ message: "Hello from chats" });
});

export default chatsRouter;