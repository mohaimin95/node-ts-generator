import { Router } from "express";
import { HelloWorldController } from "@controllers";

const helloWorldRouter = Router();

helloWorldRouter.get("/", HelloWorldController.healthCheck);

export default helloWorldRouter;
