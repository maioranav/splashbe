import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";

import { Admin } from "../model/Admin";
import { AppDataSource } from "../config/data-source.config";

export default class AdminService {
   public static findByUserName = async (username: string) => {
      const user = await AppDataSource.getRepository(Admin).findOneBy({ username });
      return user;
   };

   private static findById = async (id: string) => {
      const user = await AppDataSource.getRepository(Admin).findOneBy({ id });
      return user;
   };

   public static passwordEncrypt = async (password: string) => {
      return bcrypt.hash(password, await bcrypt.genSalt(3));
   };

   public static passwordMatch = async (password: string, user: Admin) => {
      return await bcrypt.compare(password, user.password);
   };

   public static generateToken = (id: string) => {
      if (!id || !process.env.JWT_SECRET) return null;

      return (
         "Bearer " +
         jwt.sign({ id }, process.env.JWT_SECRET, {
            expiresIn: "1h"
         })
      );
   };

   public static validateToken = async (token: string) => {
      if (!token || !process.env.JWT_SECRET) return false;

      const decodedToken = jwt.verify(token, process.env.JWT_SECRET) as any;
      if (!decodedToken?.id) return false;

      const user = await this.findById(decodedToken.id);
      if (!user) return false;

      return true;
   };
}
