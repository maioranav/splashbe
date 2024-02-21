import express, { Application } from "express";

import { ApiConfig, Controller } from "../types/main.type";

export default class API {
   private app: Application;
   private port: number;
   private name: string;

   constructor(appInit: ApiConfig) {
      this.app = express();
      this.port = appInit.port;
      this.name = appInit.name;
      this.routes(appInit.controllers);
   }

   private routes = (controllers: Controller[]) => {
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
