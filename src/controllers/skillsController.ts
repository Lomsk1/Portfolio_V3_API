import Skills from "../models/skillsModel";
import { createOne, getAll } from "./handlerFactory";

export const getAllSkills = getAll(Skills);
export const createSkills = createOne(Skills);
