import express from "express";
import helmet from "helmet";
import cors from "cors";
import { loadModules } from "./module-loader";
import ErrorMiddleware from "../shared/errors/error-middleware";
import { ErrorResponse } from "../shared/response/error-response";

export const createServer = async () => {
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use(helmet());
  app.disable("x-powered-by");

  const modules = loadModules();
  modules.forEach((module: any) => {
    app.use(`/api${module.prefix}`, module.router);
  });

  app.use(ErrorMiddleware);

  app.use((_, res) => {
    return res.status(404).json(
      ErrorResponse(
        "404",
        "Resource not found",
      )
    );
  });

  return app;
};
