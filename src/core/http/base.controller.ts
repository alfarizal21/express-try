import { Response } from "express";
import { ApiResponse } from "./api-response";
import { SuccessResponse } from "../../shared/response/success-response";

export class BaseController {
  ok<T>(res: Response<ApiResponse<T>>, data: T, message = "Success") {
    return res.json(SuccessResponse<T>(message, "200", data));
  }

  created<T>(res: Response<ApiResponse<T>>, data: T, message = "Created") {
    return res.status(201).json(SuccessResponse<T>(message, "201", data));
  }
}