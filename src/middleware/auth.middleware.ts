import { NextFunction, Request, Response } from "express";
import AdminService from "../services/admin.service";
import { debug } from "../utils/debug.util";

export default class AuthMiddleware {
   public static verifyToken = async (req: Request, res: Response, next: NextFunction) => {
      const token = req.header("Authorization")?.replace("Bearer ", "");
      if (!token) return res.status(401).json({ error: "Access denied" });

      try {
         const isTokenValid = await AdminService.validateToken(token);
         if (!isTokenValid) {
            res.status(403).json({ error: "Access denied" });
            return;
         }

         next();
      } catch (error) {
         debug("Authentication Error!", {data : "", status: "error"});
         res.status(401).json({ error });
      }
   };
}
