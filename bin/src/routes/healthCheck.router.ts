import { Router } from "express";
import { HealthCheckController } from "@controllers";

const healthCheckRouter = Router();

healthCheckRouter.get("/", HealthCheckController.healthCheck);

export default healthCheckRouter;
