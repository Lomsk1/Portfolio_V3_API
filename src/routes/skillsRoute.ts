import express from "express";
import { createSkills, getAllSkills } from "../controllers/skillsController";

const skillRouter = express.Router({
  mergeParams: true,
});

skillRouter.route("/").get(getAllSkills).post(createSkills);

export default skillRouter;
