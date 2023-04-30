import express from "express";
const router = express.Router();

import ChatController from "../controllers/chat.controller.js";
const chatController = new ChatController();

// router.get("/ask", chatController.askChatGpt);
router.post("/ask", chatController.askPostChatGpt);
export default router;
