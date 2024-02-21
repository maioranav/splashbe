import express, { Request, Response } from "express";
import { Controller } from "../types/main.type";
import StaffService from "../services/staff.service";

export default class StaffController implements Controller {
   public path = "/staff";
   public router = express.Router();

   constructor() {
      this.initRoutes();
   }

   private initRoutes() {
      this.router.get("/all", this.getAll);
      this.router.get("/:id", this.findByID);
      this.router.delete("/:id", this.deleteByID);
      this.router.post("/", this.createOne);
   }

   /**
    * Controller service for forwarding a list of all Staff.
    *
    * @param {Request} request - Request from public controller API
    * @param {Response} response - Keep alive promise that streams events
    */
   private getAll = async (request: Request, response: Response) => {
      try {
         response.status(200).json(await StaffService.getAll());
      } catch (error) {
         response.status(500).json({ error });
      }
   };

   private findByID = async (request: Request, response: Response) => {
      try {
         const id = request.params["id"];
         response.status(200).json(await StaffService.findByID(id));
      } catch (error) {
         response.status(500).json({ error });
      }
   };

   private deleteByID = async (request: Request, response: Response) => {
      try {
         const id = request.params["id"];
         response.status(200).json(await StaffService.deleteByID(id));
      } catch (error) {
         response.status(500).json({ error });
      }
   };

   private createOne = async (request: Request, response: Response) => {
      try {
         console.log(request.body);
         response.status(200).json(await StaffService.create(request.body));
      } catch (error) {
         response.status(500).json({ error });
      }
   };
}
