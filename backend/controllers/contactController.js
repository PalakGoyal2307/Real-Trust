import Contact from "../models/Contact.js";

// CREATE contact form entry (Landing Page)
export const createContact = async (req, res) => {
  try {
    const contact = await Contact.create({
      fullName: req.body.fullName,
      email: req.body.email,
      mobile: req.body.mobile,
      city: req.body.city,
    });

    res.status(201).json(contact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GET all contact form entries (Admin Panel)
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
