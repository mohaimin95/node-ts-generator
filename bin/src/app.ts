import routes from "@routes";
import { errorMiddleware } from "@middlewares";
import express, { Express } from "express";

const app: Express = express();

// Middleware to parse JSON bodies
app.use(express.json());
app.use("/", routes);
app.use(errorMiddleware);

export default app;
