import express, { Request, Response } from "express";
import { Controller } from "../types/main.type";

export default class StaffController implements Controller {
   public path = "/staff";
   public router = express.Router();

   constructor() {
      this.initRoutes();
   }

   private initRoutes() {
      this.router.get("/all", this.getAllStaff);
   }

   /**
    * Controller service for forwarding a list of all Staff.
    *
    * @param {Request} request - Request from public controller API
    * @param {Response} response - Keep alive promise that streams events
    */
   private getAllStaff = async (request: Request, response: Response) => {
      response.status(200).json({ method: "Not implemented yet!" });
   };
}
