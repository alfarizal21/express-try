import { Router } from "express";
import { LoginController } from "../controllers/login.controller";
import { LoginRequest } from "../request/login.request";
import { validateRequest } from "../middleware/validate.request";

const router = Router();
const controller = new LoginController();

router.post("/", LoginRequest, validateRequest, controller.login.bind(controller));

export default router;
