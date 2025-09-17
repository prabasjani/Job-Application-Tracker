import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
import { connectDB } from "./utils/connDB.js";
import { ApplicationRouter } from "./routes/Application.routes.js";

configDotenv();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.use("/api/v1/applications", ApplicationRouter);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is Runnning on PORT: ${PORT}`);
  });
});
