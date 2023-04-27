import AppError from "../utils/appErrors";
import { catchAsync } from "../utils/catchAsync";
import { Request, Response, NextFunction } from "express";
import { Model, Document } from "mongoose";
import fs from "fs";
import { promisify } from "util";

const readFile = promisify(fs.readFile);

export const getAll = (Model: Model<Document>) =>
  catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
    const data = await Model.find(req.query);

    res.status(200).json({
      status: "success",
      results: data.length,
      data,
    });
  });

export const createOne = (Model: Model<Document>) =>
  catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
    let createdData = req.body;
    if (req.file) {
      // const buffer = readFile(req.file.path);

      // const newImg = fs.readFileSync(req.file.path);
      // const encImg = newImg.toString("base64");

      // console.log(encImg);
      // var newItem = {
      //   description: req.body.description,
      //   contentType: req.file.mimetype,
      //   size: req.file.size,
      //   img: Buffer(encImg, "base64"),
      // };
      // createdData = {
      //   ...createdData,
      //   image: {
      //     data: req.file.filename,
      //     contentType: req.file.mimetype,
      //     name: req.file.filename,
      //   },
      // };

      // createdData = {
      //   ...createdData,
      //   image: {
      //     data: buffer,
      //     contentType: req.file.mimetype,
      //   },
      // };

      createdData = {
        ...createdData,
        image: {
          data: req.file.filename,
          contentType: req.file.destination,
          name: req.file.filename,
        },
      };
    }
    const doc = await Model.create(createdData);

    // if (req.file) {
    //   // Remove the temporary file after it's been read
    //   await promisify(fs.unlink)(req.file.path);
    // }

    res.status(201).json({
      status: "success",
      data: {
        doc,
      },
    });
  });

export const updateOne = (Model: Model<Document>) =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    let updatedData = req.body;

    if (req.file) {
      const buffer = await readFile(req.file.path);
      updatedData = {
        ...updatedData,
        image: {
          data: buffer,
          contentType: req.file.mimetype,
        },
      };
    }

    const doc = await Model.findByIdAndUpdate(req.params.id, updatedData, {
      new: true,
      runValidators: true,
    });

    if (req.file) {
      await promisify(fs.unlink)(req.file.path);
    }

    if (!doc) {
      return next(new AppError("No document found with that ID", 404));
    }

    res.status(200).json({
      status: "success",
      data: {
        doc,
      },
    });
  });

export const deleteOne = (Model: Model<Document>) =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc) {
      return next(new AppError("No document found with that ID", 404));
    }
    res.status(204).json({
      status: "success",
      data: null,
    });
  });
