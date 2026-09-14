import { HealthCheckService } from "@services";
import { Request, Response } from "express";

export default class HealthCheckController {
  static healthCheck(_req: Request, res: Response): void {
    res.status(200).json(HealthCheckService.getStatus());
  }
}
