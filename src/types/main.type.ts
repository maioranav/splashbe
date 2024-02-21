import { Router } from "express";

export interface ApiConfig {
   name: string;
   port: number;
   controllers: Controller[];
}

export interface Controller {
   path: string;
   router: Router;
}

export interface Service {}
