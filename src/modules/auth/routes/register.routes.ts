import { Router } from "express";
import { RegisterController } from "../controllers/register.controller";
import { RegisterRequest } from "../request/register.request";
import { validateRequest } from "../middleware/validate.request";

const router = Router();
const controller = new RegisterController();

router.post("/", RegisterRequest, validateRequest, controller.register.bind(controller));

export default router;

