import express from "express";
import {
  createProject,
  deleteProject,
  getAllProject,
  resizeProjectImage,
  updateProject,
  uploadProjectImage,
} from "../controllers/projectController";

const projectRoute = express.Router({
  mergeParams: true,
});

projectRoute
  .route("/")
  .get(getAllProject)
  .post(uploadProjectImage, resizeProjectImage, createProject);
projectRoute
  .route("/:id")
  .patch(uploadProjectImage, updateProject)
  .delete(deleteProject);

export default projectRoute;
