import { Request, Response, NextFunction } from "express";
import { LoginService } from "../service/login.service";
import { BaseController } from "../../../core/http/base.controller";

export class LoginController extends BaseController {
  private service = new LoginService();

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await this.service.login(req.body);
      return this.ok(res, result, "Login success");
    } catch (err) {
      next(err);
    }
  }
}
