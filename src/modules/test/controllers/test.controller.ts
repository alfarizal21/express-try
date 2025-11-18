import { NextFunction, Response } from "express";
import { SuccessResponse } from "../../../shared/response/success-response";
import { BaseController } from "../../../core/http/base.controller";
import { Handler } from "../../../core/http/types";


class TestController extends BaseController {
  getAll: Handler<any[]> = async (req, res, next) => {
    try {
        const data = [{ id: 1, name: "Test Item" }];
      return this.ok(res, data);
    } catch (err) {
      next(err);
    }
  };
}

export default new TestController();