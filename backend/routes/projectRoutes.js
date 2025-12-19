import express from "express";
import protect from "../middleware/authMiddleware.js";
import multer from "multer";
import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} from "../controllers/projectController.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.get("/", getProjects);
router.post("/", upload.single("image"), createProject);
router.put("/:id", upload.single("image"), updateProject);
router.delete("/:id", deleteProject);
// protect admin-only routes
router.post("/", protect, upload.single("image"), createProject);
router.put("/:id", protect, upload.single("image"), updateProject);
router.delete("/:id", protect, deleteProject);
export default router;
