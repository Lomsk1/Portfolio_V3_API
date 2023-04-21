import Project from "../models/projectModel";
import { createOne, deleteOne, getAll, updateOne } from "./handlerFactory";

export const getAllProject = getAll(Project);
export const createProject = createOne(Project);
export const updateProject = updateOne(Project);
export const deleteProject = deleteOne(Project);
