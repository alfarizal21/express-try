import { Request, Response, NextFunction } from "express";
import { Handler } from "../../../core/http/types";
import { BaseController } from "../../../core/http/base.controller";
import RegisterService from "../service/register.service";

class RegisterController extends BaseController {
    private registerService: RegisterService;

    constructor() {
      super();
      this.registerService = new RegisterService();
    }

    register: Handler<any> = async (req: Request, res: Response, next: NextFunction) => {
        try {
            await this.registerService.register(req.body);
            
            return this.createdMeta(res, "User registered successfully");
        } catch (err) {
            next(err);
        }
    }

        // register: Handler<any> = async (req: Request, res: Response, next: NextFunction) => {
    //     try {
    //         const result = await this.registerService.register(req.body);
    //         return this.created(res, result, "User registered successfully");
    //     } catch (err) {
    //         next(err);
    //     }
    // }
}

export default new RegisterController();
