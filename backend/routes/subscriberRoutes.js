import express from "express";
import {
  createSubscriber,
  getSubscribers,
} from "../controllers/subscriberController.js";

const router = express.Router();

// Landing Page → subscribe
router.post("/", createSubscriber);

// Admin Panel → view subscribers
router.get("/", getSubscribers);

export default router;
