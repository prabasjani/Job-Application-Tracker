import mongoose from "mongoose";
import { ApplicationSchema } from "./ApplicationModel.js";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  applies: [ApplicationSchema],
});

export const UserModel = mongoose.model("user", UserSchema);
