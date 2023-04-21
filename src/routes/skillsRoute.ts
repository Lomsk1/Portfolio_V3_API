import express from "express";
import {
  createSkills,
  deleteSkills,
  getAllSkills,
  updateSkills,
} from "../controllers/skillsController";

const skillRouter = express.Router({
  mergeParams: true,
});

skillRouter.route("/").get(getAllSkills).post(createSkills);
skillRouter.route("/:id").patch(updateSkills).delete(deleteSkills);

export default skillRouter;
