import express from "express";
import {
  createExperience,
  deleteExperience,
  getAllExperience,
  updateExperience,
} from "../controllers/expController";

const expRoute = express.Router({
  mergeParams: true,
});

expRoute.route("/").get(getAllExperience).post(createExperience);
expRoute.route("/:id").patch(updateExperience).delete(deleteExperience);

export default expRoute;
