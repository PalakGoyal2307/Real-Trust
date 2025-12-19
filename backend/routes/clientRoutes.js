import { createProject, updateProject, deleteProject } from "../controllers/clientController.js";
import express from "express";
import protect from "../middleware/authMiddleware.js";
import multer from "multer";
import {
  getClients,
  createClient,
  updateClient,
  deleteClient,
} from "../controllers/clientController.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.get("/", getClients);
router.post("/", upload.single("image"), createClient);
router.put("/:id", upload.single("image"), updateClient);
router.delete("/:id", deleteClient);
// protect admin-only routes
router.post("/", protect, upload.single("image"), createProject);
router.put("/:id", protect, upload.single("image"), updateProject);
router.delete("/:id", protect, deleteProject);
export default router;
