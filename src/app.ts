import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import mongoSanitize from "express-mongo-sanitize";
import skillRouter from "./routes/skillsRoute";
import webRoute from "./routes/webRoute";
import expRoute from "./routes/expRoute";
// import xss from "xss-clean";
// import compression from "compression";

dotenv.config();

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(
  express.json({
    limit: "10kb",
  })
);

app.use(mongoSanitize());

// Routes
app.use("/api/v1/skills", skillRouter);
app.use("/api/v1/web", webRoute);
app.use("/api/v1/experience", expRoute);

// app.use(xss());

// app.use(compression());
export default app;
