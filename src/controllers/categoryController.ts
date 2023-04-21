import Category from "../models/categoryModel";
import { createOne, deleteOne, getAll, updateOne } from "./handlerFactory";

export const getAllCategory = getAll(Category);
export const createCategory = createOne(Category);
export const updateCategory = updateOne(Category);
export const deleteCategory = deleteOne(Category);
