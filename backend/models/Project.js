import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    image: String,
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);
