import express from "express";
import {
  createContact,
  getContacts,
} from "../controllers/contactController.js";

const router = express.Router();

// Landing Page → submit form
router.post("/", createContact);

// Admin Panel → view submissions
router.get("/", getContacts);

export default router;
