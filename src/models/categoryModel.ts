import mongoose, { Document } from "mongoose";

interface ICategory {
  name: string;
  projects: mongoose.Types.ObjectId;
}

const categorySchema = new mongoose.Schema<ICategory>(
  {
    name: {
      type: String,
      required: [true, "A category must have a name"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

categorySchema.virtual("projects", {
  ref: "Project",
  foreignField: "category",
  localField: "_id",
});

categorySchema.pre(/^find/, function (next) {
  this.populate({
    path: "projects",
  });
  next();
});

const Category = mongoose.model<ICategory & Document>(
  "Category",
  categorySchema
);

export default Category;
