import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import mangaRoutes from "./routes/manga.routes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(bodyParser.json());

app.use("/md", mangaRoutes);

app.listen(PORT, () => {
  console.log("Server Running");
});
