import { defineRoutes } from "../../../core/http/define-route";
import testController from "../controllers/test.controller";

export const testRoutes = defineRoutes([
  { method: "get", path: "/index", handler: testController.getAll },
]);
