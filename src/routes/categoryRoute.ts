import express from "express";
import {
  createCategory,
  deleteCategory,
  getAllCategory,
  updateCategory,
} from "../controllers/categoryController";

const categoryRoute = express.Router({
  mergeParams: true,
});

categoryRoute.route("/").get(getAllCategory).post(createCategory);
categoryRoute.route("/:id").patch(updateCategory).delete(deleteCategory);

export default categoryRoute;
