import { LoginRoutes } from "./routes/login.routes";
import { AppModule } from "../../core/module";
import { RegisterRoutes } from "./routes/register.routes";

export const authModule = new AppModule({
  name: "auth",
  prefix: "/auth",
  routes: LoginRoutes.concat(RegisterRoutes),
});
