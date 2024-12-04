import express, { Request, Response } from "express";
import { Controller } from "../types/main.type";
import AuthMiddleware from "../middleware/auth.middleware";
import ProgrammaService from "../services/programma.service";
import NonceMiddleware from "../middleware/nonce.middleware";

export default class ProgrammaController implements Controller {
   public path = "/programmi";
   public router = express.Router();

   constructor() {
      this.initRoutes();
   }

   private initRoutes() {
      this.router.get("/all", NonceMiddleware.verifyNonce, this.getAll);
      this.router.get("/:id", NonceMiddleware.verifyNonce, this.findByID);
      this.router.delete("/:id", AuthMiddleware.verifyToken, this.deleteByID);
      this.router.post("/", AuthMiddleware.verifyToken, this.createOne);
   }

   /**
    * Controller service for forwarding a list of all Staff.
    *
    * @param {Request} request
    * @param {Response} response
    */
   private getAll = async (request: Request, response: Response) => {
      try {
         response.status(200).json(await ProgrammaService.getAll());
      } catch (error) {
         response.status(500).json({ error });
      }
   };

   private findByID = async (request: Request, response: Response) => {
      try {
         const id = request.params["id"];
         response.status(200).json(await ProgrammaService.findByID(id));
      } catch (error) {
         response.status(400).json({ error });
      }
   };

   private deleteByID = async (request: Request, response: Response) => {
      try {
         const id = request.params["id"];
         response.status(200).json(await ProgrammaService.deleteByID(id));
      } catch (error) {
         response.status(400).json({ error });
      }
   };

   private createOne = async (request: Request, response: Response) => {
      try {
         response.status(200).json(await ProgrammaService.create(request.body));
      } catch (error) {
         response.status(400).json({ error });
      }
   };
}
