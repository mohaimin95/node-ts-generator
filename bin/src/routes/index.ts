import { Router } from "express";
import healthCheckRouter from "./healthCheck.router";

const routes = Router();

routes.use("/healthCheck", healthCheckRouter);

export default routes;
