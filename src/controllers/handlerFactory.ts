import AppError from "../utils/appErrors";
import { catchAsync } from "../utils/catchAsync";
import { Request, Response, NextFunction } from "express";
import { Model, Document } from "mongoose";

export const getAll = (Model: Model<Document>) =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const doc = await Model.find(req.query);

    res.status(200).json({
      status: "success",
      results: doc.length,
      data: {
        doc,
      },
    });
  });

export const createOne = (Model: Model<Document>) =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const doc = await Model.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        doc,
      },
    });
  });

export const updateOne = (Model: Model<Document>) =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

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
