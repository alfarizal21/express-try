import { Request, NextFunction, Response } from "express";
import { ErrorResponse } from "../response/error-response";

interface AppError extends Error {
  status?: number;
  fileName?: string;
  lineNumber?: number;
}

export default function ErrorMiddleware(
   err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const status = err.status || 500;

  const response = ErrorResponse(
    err.message || "Internal Server Error",
    status.toString(),
    [
      {
        message: err.message,
        file: err.fileName ?? "unknown",
        line: err.lineNumber ?? 0
      }
    ]
  );

  res.status(status).json(response);
}
