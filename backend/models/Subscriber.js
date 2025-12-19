import mongoose from "mongoose";

const subscriberSchema = new mongoose.Schema(
  {
    email: String,
  },
  { timestamps: true }
);

export default mongoose.model("Subscriber", subscriberSchema);
