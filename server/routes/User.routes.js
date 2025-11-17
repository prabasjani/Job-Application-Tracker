import { Router } from "express";
import { verifyToken } from "../utils/Auth.Middleware.js";
import {
  currentUser,
  deleteUser,
  login,
  logout,
  register,
} from "../controllers/User.controller.js";

const route = Router();

route.post("/register", register);

route.post("/login", login);

// VerifyToken gives permission for verified users only
route.get("/current-user", verifyToken, currentUser);

// VerifyToken gives permission for verified users only
route.delete("/delete-user", verifyToken, deleteUser);

route.post("/logout", logout);

export { route as UserRoute };
