import routes from "@routes";
import express, { Express } from "express";

const app: Express = express();

// Middleware to parse JSON bodies
app.use(express.json());
app.use("/", routes);

export default app;
