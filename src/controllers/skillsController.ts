import Skills from "../models/skillsModel";
import { createOne, deleteOne, getAll, updateOne } from "./handlerFactory";

export const getAllSkills = getAll(Skills);
export const createSkills = createOne(Skills);
export const updateSkills = updateOne(Skills);
export const deleteSkills = deleteOne(Skills);
