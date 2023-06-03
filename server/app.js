import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Blog from './Modules/Blog.js'
import Project from './Modules/Project.js'
import Upload from './Middleware/Upload.js';

const app = express();

const access ={
    origin : "http://localhost:3000"
}
app.use(cors(access))
app.use(bodyParser.json())
//connet
mongoose.connect('mongodb+srv://asim:Hazkap-4noqta-hutryt@project.pxoqkak.mongodb.net/'
, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

  //homepage
app.get('/', (req, res) => {
    res.json({ message: 'Home Page' });
  });

 //blog
 app.post("/blog",async(req,res)=>{
  try {
      const blog = new Blog(req.body);
      await blog.save();
      res.status(201).json({ message: "Blog created successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Blog created failed" });
    }
})
app.get('/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to get blogs' });
  }
})
app.delete('/blogs/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const deletedBlog = await Product.findByIdAndDelete(id);
    res.status(200).send(deletedBlog);
  } catch (err) {
    res.status(500).send(err);
  }
});
app.put("/blogs/:id", async (req, res) => {
  const id = req.params.id;
  const title = req.body.title;
  const categories = req.body.categories;
  const summary = req.body.summary;
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(id, { title, categories, summary }, { new: true });
    res.status(200).send(updatedBlog);
  } catch (err) {
    res.status(500).send(err);
  }
});
//Project 
app.post('/project', Upload.single('image'), async (req, res)=>{
  try {
      const project = new Project(req.body);
      await project.save();
      res.status(201).json({ message: "Project created successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Project created failed" });
    }
})
app.get('/projects', async (req, res) => {
  try {
    const proejcts = await Project.find();
    res.status(200).json(proejcts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to get projects' });
  }
})
app.delete('/projects/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const deletedProject = await Project.findByIdAndDelete(id);
    res.status(200).send(deletedProject);
  } catch (err) {
    res.status(500).send(err);
  }
});
app.put("/projects/:id", async (req, res) => {
  const id = req.params.id;
  const title = req.body.title;
  const categories = req.body.categories;
  const img = req.body.img;
  const summary = req.body.summary;
  try {
    const updatedProject = await Project.findByIdAndUpdate(id, { title, categories, img,summary, }, { new: true });
    res.status(200).send(updatedProject);
  } catch (err) {
    res.status(500).send(err);
  }
});
  //listen app
const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`Listen ${port}`);
});
