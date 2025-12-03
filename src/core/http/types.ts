import { Request, Response, NextFunction, RequestHandler } from "express";

export type Handler<T = any> = (
  req: Request,
  res: Response<ApiResponse<T>>,
  next: NextFunction
) => Promise<any>;

export type ApiResponse<T> = {
    meta: {
        success: boolean;
        status_code: string;
        message: string;
    };
    data?: T;
    errors?: ErrorException[] | ValidationError[];
};

export type ErrorException = {
    message: string;
    file: string;
    line: number;
};

export type ValidationError = {
    field: string;
    message: string;
};


export type HttpMethod = "get" | "post" | "put" | "delete" | "patch";

export interface RouteDefinition {
  method: HttpMethod;
  path: string;
  handler: RequestHandler | RequestHandler[]; 
}

// export interface RouteDefinition {
//   method: HttpMethod;
//   path: string;
//   handler: RequestHandler;
// }



    
