import express, { Request, Response } from "express";
import Email from "../utils/mail";
import { catchAsync } from "../utils/catchAsync";

const emailRoute = express.Router();

emailRoute.route("/").post(
  catchAsync(async (req: Request, res: Response) => {
    const email = new Email(req.body);
    const sendData = await email.send();
    console.log(sendData);

    res.status(200).json({
      status: sendData.success ? "success" : "error",
      message: sendData.message,
    });
  })
);

export default emailRoute;
