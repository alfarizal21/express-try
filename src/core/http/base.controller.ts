import { Response } from "express";
import { ApiResponse } from "../../core/http/types";
import { SuccessResponse } from "../../shared/response/success-response";

export class BaseController {
  ok<T>(res: Response<ApiResponse<T>>, data: T, message = "Success") {
    return res.json(SuccessResponse<T>(message, "200", data));
  }

  created<T>(res: Response<ApiResponse<T>>, data: T, message = "Created") {
    return res.status(201).json(SuccessResponse<T>(message, "201", data));
  }

  okMeta(res: Response, message = "Success") {
    return res.json(SuccessResponse(message, "200"));
  }

  createdMeta(res: Response, message = "Created") {
    return res.status(201).json(SuccessResponse(message, "201"));
  }
}