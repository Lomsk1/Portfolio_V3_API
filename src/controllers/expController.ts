import Experience from "../models/experienceModel";
import { createOne, deleteOne, getAll, updateOne } from "./handlerFactory";

export const getAllExperience = getAll(Experience);
export const createExperience = createOne(Experience);
export const updateExperience = updateOne(Experience);
export const deleteExperience = deleteOne(Experience);
