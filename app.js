import express from "express";
import cors from "cors";
import router from "./src/routes/index.js";

const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use("/liveness", (req, res) => {
  res.status(200).send("ok");
});
app.use("/", router);

export default app;