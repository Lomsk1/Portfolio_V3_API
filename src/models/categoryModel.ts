import mongoose, { Document } from "mongoose";

interface ICategory {
  name: string;
}

const categorySchema = new mongoose.Schema<ICategory>({
  name: {
    type: String,
    required: [true, "A category must have a name"],
  },
});

const Category = mongoose.model<ICategory & Document>(
  "Category",
  categorySchema
);

export default Category;
