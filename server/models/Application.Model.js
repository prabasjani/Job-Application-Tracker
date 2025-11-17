import mongoose from "mongoose";

const ApplicationSchema = new mongoose.Schema({
  applicationID: Number,
  role: String,
  company: String,
  email: String,
  mobile: String,
  from: String,
  status: {
    type: String,
    default: "applied",
  },
  appliedDate: {
    type: Date,
    default: Date.now,
  },

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

export const ApplicationModel = mongoose.model(
  "applications",
  ApplicationSchema
);
