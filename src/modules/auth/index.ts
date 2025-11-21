import { Router } from "express";
import loginRoutes from "./routes/login.routes";
import registerRoutes from "./routes/register.routes";

const router = Router();

router.use("/login", loginRoutes);
router.use("/register", registerRoutes);

export default {
  prefix: "/auth",
  router
};
