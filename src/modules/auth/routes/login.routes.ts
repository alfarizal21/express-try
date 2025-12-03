import { defineRoutes } from "../../../core/http/define-route";
import  LoginController  from "../controllers/login.controller";
import { LoginRequest } from "../request/login.request"; 
import { validateRequest } from "../middleware/validate.request"; 

export const LoginRoutes = defineRoutes([
  {
    method: "post",
    path: "/login",
    handler: [
      ...LoginRequest,
      validateRequest,
      LoginController.login
    ]
  }
])

// export const LoginRoutes = defineRoutes([
//   { method: "post", path: "/login", handler: LoginController.login },
// ]);