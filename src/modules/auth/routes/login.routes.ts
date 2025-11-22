import { defineRoutes } from "../../../core/http/define-route";
import  LoginController  from "../controllers/login.controller";

export const LoginRoutes = defineRoutes([
  { method: "post", path: "/login", handler: LoginController.login },
]);