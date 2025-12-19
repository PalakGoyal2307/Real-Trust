import Client from "../models/Client.js";

// GET all clients
export const getClients = async (req, res) => {
  const clients = await Client.find();
  res.json(clients);
};

// CREATE client
export const createClient = async (req, res) => {
  const client = await Client.create({
    name: req.body.name,
    description: req.body.description,
    designation: req.body.designation,
    image: req.file?.path,
  });
  res.status(201).json(client);
};

// UPDATE client
export const updateClient = async (req, res) => {
  const client = await Client.findById(req.params.id);

  if (!client) {
    return res.status(404).json({ message: "Client not found" });
  }

  client.name = req.body.name || client.name;
  client.description = req.body.description || client.description;
  client.designation = req.body.designation || client.designation;
  if (req.file) client.image = req.file.path;

  const updated = await client.save();
  res.json(updated);
};

// DELETE client
export const deleteClient = async (req, res) => {
  await Client.findByIdAndDelete(req.params.id);
  res.json({ message: "Client deleted" });
};

// clientController.js
export const createProject = async (req, res) => {
  try {
    // your logic for creating a project
    res.status(201).json({ message: "Project created" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// clientController.js
export const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    // Example logic
    // Update the project in DB here
    res.status(200).json({ message: `Project ${id} updated` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// clientController.js
export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    // Delete project from DB here
    res.status(200).json({ message: `Project ${id} deleted successfully` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

