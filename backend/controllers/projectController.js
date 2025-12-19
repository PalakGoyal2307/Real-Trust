import Project from "../models/Project.js";

// GET all projects
export const getProjects = async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
};

// CREATE project
export const createProject = async (req, res) => {
  const project = await Project.create({
    name: req.body.name,
    description: req.body.description,
    image: req.file?.path,
  });
  res.status(201).json(project);
};

// UPDATE project
export const updateProject = async (req, res) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    return res.status(404).json({ message: "Project not found" });
  }

  project.name = req.body.name || project.name;
  project.description = req.body.description || project.description;
  if (req.file) project.image = req.file.path;

  const updated = await project.save();
  res.json(updated);
};

// DELETE project
export const deleteProject = async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ message: "Project deleted" });
};
