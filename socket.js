import {Server} from "socket.io";
import app from "./app.js";
import http from "http";


let server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    method: ["GET", "POST"],
    allowedHeader: ["authorization"],
  },
});

/* NameSpace */
const mafia = io.of("mafia");

export default server;