import express, { Application } from "express";
import cors from "cors";

import { ApiConfig } from "../types/main.type";

export default class API {
   private app: Application;
   private port: number;
   private name: string;

   constructor(appInit: ApiConfig) {
      this.app = express();
      this.port = appInit.port;
      this.name = appInit.name;
      this.middlewares();
      this.routes(appInit.controllers);
   }

   private middlewares = (middlewares?: any[]) => {
      this.app.use(cors());
      middlewares?.forEach((middleware) => {
         this.app.use(middleware.mainMethod);
      });
   };

   private routes = (controllers: any[]) => {
      controllers?.forEach((controller) => {
         this.app.use(controller.path, controller.router);
      });
   };

   public listen() {
      this.app.listen(this.port, () => {
         console.info(`${this.name} listenting on port: ${this.port}`);
      });
   }
}
