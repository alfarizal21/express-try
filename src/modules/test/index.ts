import { testRoutes } from "./routes/test.route";
import { AppModule } from "../../core/module";

export const testModule = new AppModule({
  name: "test",
  prefix: "/testing-folder",
  routes: testRoutes,
});