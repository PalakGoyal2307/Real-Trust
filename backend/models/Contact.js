import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    fullName: String,
    email: String,
    mobile: String,
    city: String,
  },
  { timestamps: true }
);

export default mongoose.model("Contact", contactSchema);
