import { Request } from "express";
import multer from "multer";
import Project from "../models/projectModel";
import { createOne, deleteOne, getAll, updateOne } from "./handlerFactory";

const storage = multer.diskStorage({
  destination: function (
    req: Request,
    file: Express.Multer.File,
    cb: Function
  ) {
    cb(null, "src/images/project");
  },
  filename: function (req: Request, file: Express.Multer.File, cb: Function) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

export const uploadProjectImage = upload.single("image");

export const getAllProject = getAll(Project);
export const createProject = createOne(Project);
export const updateProject = updateOne(Project);
export const deleteProject = deleteOne(Project);
