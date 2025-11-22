import { Request, Response, NextFunction } from "express";
import { BaseController } from "../../../core/http/base.controller";
import { Handler } from "../../../core/http/types";
import  LoginService  from "../service/login.service";

class LoginController extends BaseController {
    private loginService: LoginService;

    constructor() {
        super();
        this.loginService = new LoginService();
    }

    login: Handler<any> = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.loginService.login(req.body);
            return this.ok(res, result, "Login success");
        } catch (err) {
            next(err);
        }
    }
}

export default new LoginController();
