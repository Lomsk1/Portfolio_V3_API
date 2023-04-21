import express from "express";
import { createWeb, getAllWeb } from "../controllers/webController";

const webRoute = express.Router({
  mergeParams: true,
});

webRoute.route("/").get(getAllWeb).post(createWeb);

export default webRoute;
