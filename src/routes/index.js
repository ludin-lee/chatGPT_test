// const authMiddleware = require('../middlewares/auth');
import express from "express";
import chatRouter from "./chat.router.js";
const router = express.Router();

router.use("/chat", chatRouter);

export default router;
