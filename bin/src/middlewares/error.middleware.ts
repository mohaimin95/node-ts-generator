import { ErrorRequestHandler } from "express";

const errorMiddleware: ErrorRequestHandler = (
  error,
  _request,
  response,
  next,
) => {
  void next;

  const statusCode =
    typeof error?.statusCode === "number" ? error.statusCode : 500;
  const message =
    error instanceof Error ? error.message : "Internal Server Error";

  response.status(statusCode).json({
    success: false,
    message,
  });
};

export default errorMiddleware;
