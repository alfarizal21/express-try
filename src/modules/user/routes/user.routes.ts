import { defineRoutes } from "../../../core/http/define-route";
import UserController from "../controllers/user.controller";
import { authMiddleware } from "../../auth/middleware/auth.middleware";
import { UserRequest } from "../request/user.request";
import { validateRequest } from "../../auth/middleware/validate.request";

export const UserRoutes = defineRoutes([
  {
    method: "get",
    path: "/me", 
    handler: [authMiddleware, UserController.getProfile],
  },
  {
    method: "patch",
    path: "/me", 
    handler: [
      authMiddleware,
      ...UserRequest, 
      validateRequest,       
      UserController.updateProfile
    ],
  },
]);