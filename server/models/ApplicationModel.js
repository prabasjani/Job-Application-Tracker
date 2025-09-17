import mongoose from "mongoose";

export const ApplicationSchema = new mongoose.Schema({
  company: String,
  role: String,
  email: String,
  mobile: String,
  from: String,
  appliedDate: {
    type: Date,
    default: Date.now(),
  },
  status: {
    type: String,
    default: "Pending",
  },
});

export const ApplicationModel = mongoose.model(
  "application",
  ApplicationSchema
);
