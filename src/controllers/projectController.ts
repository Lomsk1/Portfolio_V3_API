import { NextFunction, Request, Response } from "express";
import multer from "multer";
import Project from "../models/projectModel";
import { createOne, deleteOne, getAll, updateOne } from "./handlerFactory";
import { catchAsync } from "../utils/catchAsync";
import sharp from "sharp";
import zlib from "zlib";

const storage = multer.diskStorage({
  destination: function (
    _req: Request,
    _file: Express.Multer.File,
    cb: Function
  ) {
    cb(null, "src/images/project");
  },
  filename: function (_req: Request, file: Express.Multer.File, cb: Function) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

export const uploadProjectImage = upload.single("image");

export const resizeProjectImage = catchAsync(
  async (req: Request, _res: Response, next: NextFunction) => {
    if (!req.file || !req.file.buffer) return next();

    // // 1) Cover Image
    // req.body.imageCover = `tour-${req.params.id}-${Date.now()}-cover.jpeg`;

    // await sharp(req.files.imageCover[0].buffer)
    //   .resize(2000, 1333)
    //   .toFormat("jpeg")
    //   .jpeg({ quality: 90 })
    //   .toFile(`pubic/img/tours/${req.body.imageCover}`);

    const resizedImage = await sharp(req.file.buffer)
      .resize(800) //resize the image if needed
      .toFormat("jpeg")
      .jpeg({ quality: 90 })
      .toBuffer();

    const compressedBuffer = zlib.gzipSync(resizedImage);

    req.body.image = compressedBuffer;

    next();
  }
);

export const getAllProject = getAll(Project);
export const createProject = createOne(Project);
export const updateProject = updateOne(Project);
export const deleteProject = deleteOne(Project);
