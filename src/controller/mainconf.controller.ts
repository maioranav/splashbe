import express, { Request, Response } from "express";
import { Controller } from "../types/main.type";
import AuthMiddleware from "../middleware/auth.middleware";
import MainConfService from "../services/mainconf.service";
import { MainType } from "../model/mainconf.enum";
import NonceMiddleware from "../middleware/nonce.middleware";

export default class MainConfController implements Controller {
   public path = "/main";
   public router = express.Router();

   constructor() {
      this.initRoutes();
   }

   private initRoutes() {
      this.router.get("/all", NonceMiddleware.verifyNonce, this.getAll);
      //this.router.get("/id/:id", this.findByID); //Deprecated
      this.router.get("/title/:title", this.findByTitle);
      this.router.delete("/:id", AuthMiddleware.verifyToken, this.deleteByID);
      this.router.post("/", AuthMiddleware.verifyToken, this.createOne);
   }

   private getAll = async (request: Request, response: Response) => {
      try {
         response.status(200).json(await MainConfService.getAll());
      } catch (error) {
         response.status(500).json({ error });
      }
   };

   // Deprecated
   private findByID = async (request: Request, response: Response) => {
      try {
         const id = request.params["id"];
         response.status(200).json(await MainConfService.findByID(id));
      } catch (error) {
         response.status(400).json({ error });
      }
   };

   private findByTitle = async (request: Request, response: Response) => {
      try {
         const title = request.params["title"];
         response.status(200).json(await MainConfService.findByTitle(title as MainType));
      } catch (error) {
         response.status(400).json({ error });
      }
   };

   private deleteByID = async (request: Request, response: Response) => {
      try {
         const id = request.params["id"];
         response.status(200).json(await MainConfService.deleteByID(id));
      } catch (error) {
         response.status(400).json({ error });
      }
   };

   private createOne = async (request: Request, response: Response) => {
      try {
         response.status(200).json(await MainConfService.create(request.body));
      } catch (error) {
         response.status(400).json({ error });
      }
   };
}
