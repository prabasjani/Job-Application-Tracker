import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";

configDotenv();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is Runnning on PORT: ${PORT}`);
});
