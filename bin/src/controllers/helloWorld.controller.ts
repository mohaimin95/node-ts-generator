import { HelloWorldService } from "@services";
import { Request, Response } from "express";

export default class HelloWorldController {
  static healthCheck(_req: Request, res: Response): void {
    const message = HelloWorldService.getGreetings();
    res.status(200).send(message);
  }
}
