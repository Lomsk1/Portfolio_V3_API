import mongoose, { Document } from "mongoose";

interface IExp {
  title: string;
  year: number;
}

const experienceSchema = new mongoose.Schema<IExp>({
  title: {
    type: String,
    required: [true, "experience must have a title"],
  },
  year: {
    type: Number,
    required: [true, "experience must have a year"],
  },
});

const Experience = mongoose.model<IExp & Document>(
  "Experience",
  experienceSchema
);

export default Experience;
