import { Request, Response, NextFunction } from "express";
import { BaseController } from "../../../core/http/base.controller";
import { Handler } from "../../../core/http/types";
import  LoginService  from "../service/login.service";
import { ca } from "zod/v4/locales";

class LoginController extends BaseController {
    private loginService: LoginService;

    constructor() {
        super();
        this.loginService = new LoginService();
    }

    login: Handler<any> = async (req: Request, res: Response, next: NextFunction) => {
        try {
            await this.loginService.login(req.body);
            
            return this.okMeta(res, "Login success");
        } catch (err) {
            next(err);
        }
    }

    // login: Handler<any> = async (req: Request, res: Response, next: NextFunction) => {
    //     try {
    //         const result = await this.loginService.login(req.body);
    //         return this.ok(res, result, "Login success");
    //     } catch (err) {
    //         next(err);
    //     }
    // }
}

export default new LoginController();
