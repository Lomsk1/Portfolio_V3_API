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

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://www.lomsk1.dev",
      "https://portfoliov3api-production.up.railway.app/",
    ],
  })
);
// var corsOptions = {
//   origin: "http://example.com",
//   optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
// };
app.options("*", cors());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use("/images", express.static(path.join(__dirname, "images")));

app.use(express.json());

app.use(mongoSanitize());
// app.use(helmet());
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

// Routes
app.use("/api/v1/skills", skillRouter);
app.use("/api/v1/web", webRoute);
app.use("/api/v1/experience", expRoute);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/project", projectRoute);

app.use(xss());

app.use(compression());

export default app;
