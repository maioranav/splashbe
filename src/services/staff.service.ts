import { AppDataSource } from "../config/data-source.config";
import { Staff } from "../model/Staff";
import { CreateStaff } from "../types/staff.type";

export default class StaffService {
   public static getAll = async () => {
      const staff = await AppDataSource.getRepository(Staff).find();
      return staff;
   };

   public static findByID = async (id: string) => {
      const staff = await AppDataSource.getRepository(Staff).findOneBy({ id });
      return staff;
   };

   public static create = async ({ nome, ruolo }: CreateStaff) => {
      const staff = AppDataSource.getRepository(Staff).create({ nome, ruolo });
      return await AppDataSource.getRepository(Staff).save(staff);
   };

   public static deleteByID = async (id: string) => {
      const staff = await AppDataSource.getRepository(Staff).findOneBy({ id });
      if (!staff) throw new Error("Staff not found");
      return await AppDataSource.getRepository(Staff).delete({ id });
   };
}
