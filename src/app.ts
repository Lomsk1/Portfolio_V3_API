import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import mongoSanitize from "express-mongo-sanitize";
import skillRouter from "./routes/skillsRoute";
import webRoute from "./routes/webRoute";
import expRoute from "./routes/expRoute";
import categoryRoute from "./routes/categoryRoute";
import projectRoute from "./routes/projectRoute";
import xss from "xss-clean";
import compression from "compression";
import cors from "cors";
import path from "path";
import helmet from "helmet";

dotenv.config();

const app = express();

app.use(cors());
app.options("*", cors());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use("/images", express.static(path.join(__dirname, "images")));

app.use(express.json());

app.use(mongoSanitize());
app.use(helmet());

// Routes
app.use("/api/v1/skills", skillRouter);
app.use("/api/v1/web", webRoute);
app.use("/api/v1/experience", expRoute);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/project", projectRoute);

app.use(xss());

app.use(compression());

export default app;
