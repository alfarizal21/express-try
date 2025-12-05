import { Response, NextFunction } from "express";
import { BaseController } from "../../../core/http/base.controller";
import { Handler } from "../../../core/http/types";
import UserService from "../service/user.service";
import { AuthRequest } from "../../auth/middleware/auth.middleware";  

class UserController extends BaseController {
    private userService: UserService;

    constructor() {
        super();
        this.userService = new UserService();
    }

    getProfile: Handler<any> = async (req: AuthRequest, res: Response, next: NextFunction) => {
        try {
            const userId = req.user?.userId;
            if (!userId) {throw new Error("User not found")}

            const userProfile = await this.userService.getProfile(userId);
            return this.ok(res, userProfile, "User profile fetched successfully");
        } catch (err) {
            next(err);
        }
    }

    updateProfile: Handler<any> = async (req: AuthRequest, res: Response, next: NextFunction) => {
        try {
            const userId = req.user?.userId;
            if (!userId) {throw new Error("User not found")}
            const updatedProfile = await this.userService.updateProfile(userId, req.body);
            return this.ok(res, updatedProfile, "User profile updated successfully");
        } catch (err) {
            next(err);
        }
    }
}

export default new UserController();