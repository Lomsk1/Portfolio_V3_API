import AppError from "../utils/appErrors";
import { catchAsync } from "../utils/catchAsync";

// interface ModelTypes {
//   Model: any;
//   findById: number;
// }

export const getAll = (Model: any) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.find(req.query);

    res.status(200).json({
      status: "success",
      results: doc.length,
      data: {
        doc,
      },
    });
  });

export const getOne = (Model) =>
  catchAsync(async (req, res, next) => {
    let query = Model.findById(req.params.id);

    const doc = await query;

    if (!doc) {
      return next(new AppError("No document found with what ID", 404));
    }

    res.status(200).json({
      status: "success",
      data: {
        data: doc,
      },
    });
  });

export const createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        doc,
      },
    });
  });
