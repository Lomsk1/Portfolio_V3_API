import express from "express";
import {
  createProject,
  deleteProject,
  getAllProject,
  updateProject,
} from "../controllers/projectController";

const projectRoute = express.Router({
  mergeParams: true,
});

projectRoute.route("/").get(getAllProject).post(createProject);
projectRoute.route("/:id").patch(updateProject).delete(deleteProject);

export default projectRoute;
