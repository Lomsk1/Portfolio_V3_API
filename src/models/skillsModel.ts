import mongoose, { Document } from "mongoose";

interface ISkills {
  name: string;
  experience: String;
  web: mongoose.Types.ObjectId;
}

const skillSchema = new mongoose.Schema<ISkills>({
  name: {
    type: String,
    required: [true, "A skill must have a name"],
  },
  experience: {
    type: Number,
    min: [10, "experience must be above 10"],
    max: [100, "experience must me lower or equal 100"],
    required: [true, "A skill must have an experience amount"],
  },
  web: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Web",
    required: [true, "A skill must have a web"],
  },
});

const Skills = mongoose.model<ISkills & Document>("Skills", skillSchema);

export default Skills;
