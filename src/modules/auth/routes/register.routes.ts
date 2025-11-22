import { defineRoutes } from "../../../core/http/define-route";
import RegisterController from "../controllers/register.controller";

export const RegisterRoutes = defineRoutes([
    { method: "post", path: "/register", handler: RegisterController.register },
])



