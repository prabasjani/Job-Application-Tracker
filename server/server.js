import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
import { connectDB } from "./config/connectDB.js";
import cookieParser from "cookie-parser";
import { UserRoute } from "./routes/User.routes.js";
import { ApplicationRoute } from "./routes/Application.route.js";
import { verifyToken } from "./utils/Auth.Middleware.js";

configDotenv();

const app = express();
const PORT = process.env.PORT || 3000;

// Common Middlewares
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(cookieParser());

// App main routes
app.use("/api/v1/user", UserRoute);
// Only verified Users can CREAT,READ,UPDATE,DELETE the Application
app.use("/api/v1/application", verifyToken, ApplicationRoute);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server Running on PORT: " + PORT);
  });
});
