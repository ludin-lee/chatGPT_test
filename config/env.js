import dotenv from "dotenv";

dotenv.config({path: "./config/.env/.env." + process.env.NODE_ENV});