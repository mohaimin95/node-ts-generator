import { Router } from "express";
import helloWorldRouter from "./helloWorld.router";

const routes = Router();

routes.use("/helloWorld", helloWorldRouter);

export default routes;
