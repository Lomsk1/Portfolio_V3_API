import mongoose, { Document } from "mongoose";

interface IProject {
  title: string;
  description: string;
  condition: string;
  gitRep: string;
  link: string;
  image: string;
  category: mongoose.Types.ObjectId;
}

const projectSchema = new mongoose.Schema<IProject>({
  title: {
    type: String,
    required: [true, "A project must have a title"],
  },
  description: {
    type: String,
    required: [true, "A project must have a description"],
  },
  condition: {
    type: String,
    required: [true, "A project must have a condition"],
  },
  gitRep: {
    type: String,
  },
  link: {
    type: String,
    required: [true, "A project must have a link"],
  },
  image: {
    type: String,
  },
  category: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: [true, "A skill must have a category"],
    },
  ],
});

const Project = mongoose.model<IProject & Document>("Project", projectSchema);

export default Project;
