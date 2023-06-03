import express from 'express';
import Project from '../../Modules/Project.js';

const router = express.Router();

router.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/projects', async (req, res) => {
  const { title, categories, price, img, summary } = req.body;

  try {
    const project = new Project({
      title,
      categories,
      price,
      img,
      summary,
    });

    const newProject = await project.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
