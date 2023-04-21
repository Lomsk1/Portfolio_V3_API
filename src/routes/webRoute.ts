import express from "express";
import {
  createWeb,
  deleteWeb,
  getAllWeb,
  updateWeb,
} from "../controllers/webController";

const webRoute = express.Router({
  mergeParams: true,
});

webRoute.route("/").get(getAllWeb).post(createWeb);
webRoute.route("/:id").patch(updateWeb).delete(deleteWeb);

export default webRoute;
