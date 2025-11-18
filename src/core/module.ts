import { Router } from "express";
import { RouteDefinition } from "./http/types";
import { loadRoutes } from "./http/router";

export interface AppModuleOptions {
  name: string;
  prefix?: string;
  routes?: RouteDefinition[];
}

export class AppModule {
  name: string;
  prefix: string;
  routes: RouteDefinition[];
  router: Router;

  constructor(options: AppModuleOptions) {
    this.name = options.name;
    this.prefix = options.prefix || `/${options.name}`;
    this.routes = options.routes || [];

    this.router = loadRoutes(this.routes);
  }
}
