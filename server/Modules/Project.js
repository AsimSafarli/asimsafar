
import mongoose from 'mongoose'

const { Schema, model } = mongoose;

const ProjectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    categories: { type: String, required: true },
    img: { type: String, required: true },
    summary:{type:String,require:true}
});

const Project = model("Project", ProjectSchema);

export default Project;