import Subscriber from "../models/Subscriber.js";

// CREATE subscriber (Landing Page)
export const createSubscriber = async (req, res) => {
  try {
    const subscriber = await Subscriber.create({
      email: req.body.email,
    });

    res.status(201).json(subscriber);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GET all subscribers (Admin Panel)
export const getSubscribers = async (req, res) => {
  try {
    const subscribers = await Subscriber.find().sort({ createdAt: -1 });
    res.json(subscribers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
