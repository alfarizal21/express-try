import { Router } from "express";
import { RouteDefinition } from "./types";

export function loadRoutes(routeDefs: RouteDefinition[]) {
  const router = Router();

  for (const r of routeDefs) {
    router[r.method](r.path, r.handler);
  }

  return router;
}
