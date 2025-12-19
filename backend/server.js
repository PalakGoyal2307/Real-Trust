import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import connectDB from "./config/db.js";

connectDB();

import projectRoutes from "./routes/projectRoutes.js";
import clientRoutes from "./routes/clientRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import subscriberRoutes from "./routes/subscriberRoutes.js";




const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/api/projects", projectRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/subscribers", subscriberRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);

app.get("/", (req, res) => {
  res.send("API is running...");
});
