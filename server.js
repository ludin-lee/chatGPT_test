import "./config/env.js";
import server from "./socket.js";

server.listen(process.env.HTTPPORT, () => {
  console.log(`Server OPEN,${process.env.HTTPPORT}`);
});