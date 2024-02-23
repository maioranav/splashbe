import express, { Request, Response } from "express";
import { Controller } from "../types/main.type";
import AdminService from "../services/admin.service";
import { debug } from "../utils/debug.util";

export default class AdminController implements Controller {
   public path = "/admin";
   public router = express.Router();

   constructor() {
      this.initRoutes();
   }

   private initRoutes() {
      this.router.post("/login", this.login);
   }

   private login = async (request: Request, response: Response) => {
      try {
         const username = request.body.username;
         const password = request.body.password;
         if (!username || !password) throw new Error("Missing fields");

         const user = await AdminService.findByUserName(username);
         if (!user) throw new Error("Not authorized");
         debug("User does not exist" + username);

         const match = await AdminService.passwordMatch(password, user);
         if (!match) throw new Error("Not Authorized");
         debug("Wrong password" + username);

         response.status(200).json({ token: AdminService.generateToken(user.id) });
      } catch (error) {
         response.status(403).json({ error });
      }
   };
}
