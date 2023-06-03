
import mongoose from 'mongoose'

const { Schema, model } = mongoose;

const BlogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    categories: { type: String, required: true },
    text: { type: String, required: true },
});

const Blog = model("Blog", BlogSchema);

export default Blog;