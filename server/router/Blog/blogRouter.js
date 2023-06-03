import express from 'express';
import Blog from '../../Modules/Blog.js';

const router = express.Router();

router.get('/blogs', async (req, res) => {
  try {
    const projects = await Blog.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/blogs', async (req, res) => {
   const { title, categories, summary } = req.body;

     try {
          const blog = new Blog({
      title,
      categories,
      summary,
    });

    const newBlog = await blog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
router.delete('/blogs/:id', async (req, res) => {
    const id = req.params.id;
    try {
      const deletedBlog = await Blog.findByIdAndDelete(id);
      res.status(200).send(deletedProduct);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  router.put("/blogs/:id", async (req, res) => {
    const id = req.params.id;
    const title = req.body.title;
    const categories = req.body.categories;
    const text=req.body.text;
    try {
      const updatedBlog = await Blog.findByIdAndUpdate(id, { name, categories, price }, { new: true });
      res.status(200).send(updatedBlog);
    } catch (err) {
      res.status(500).send(err);
    }
  });
export default router;
