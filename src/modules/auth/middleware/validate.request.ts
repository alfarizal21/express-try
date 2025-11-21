import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import HttpException from "../../../shared/errors/htttp-exceptions";

export function validateRequest(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const formatted = errors.array().map((err) => ({
      field: (err as any).path,   // FIX: gunakan path + cast agar aman
      message: err.msg,
    }));

    return next(
      new HttpException(
        422,
        "Validation Error",
        formatted
      )
    );
  }

  next();
}
