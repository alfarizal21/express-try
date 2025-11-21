import { Request, Response, NextFunction } from "express";
import { RegisterService } from "../service/register.service";
import { BaseController } from "../../../core/http/base.controller";

export class RegisterController extends BaseController {
  private service = new RegisterService();

  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await this.service.register(req.body);
      return this.created(res, result, "User registered successfully");
    } catch (err) {
      next(err);
    }
  }
}
