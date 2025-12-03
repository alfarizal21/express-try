import { defineRoutes } from "../../../core/http/define-route";
import RegisterController from "../controllers/register.controller";
import { RegisterRequest } from "../request/register.request"; 
import { validateRequest } from "../middleware/validate.request"; 

export const RegisterRoutes = defineRoutes([
    { 
        method: "post", 
        path: "/register", 
        handler: [
            ...RegisterRequest,   
            validateRequest,      
            RegisterController.register
        ] 
    },
]);

// export const RegisterRoutes = defineRoutes([
//     { method: "post", path: "/register", handler: RegisterController.register },
// ])

