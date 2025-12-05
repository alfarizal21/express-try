import { UserRoutes } from "./routes/user.routes";
import { AppModule } from "../../core/module";

export const userModule = new AppModule({
    name: "user",
    prefix: "/user",
    routes: UserRoutes,
})



