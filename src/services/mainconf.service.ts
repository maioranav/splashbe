import { AppDataSource } from "../config/data-source.config";
import { MainConf } from "../model/MainConf";
import { MainType } from "../model/mainconf.enum";
import { CreateMainConf } from "../types/mainconf.type";

export default class MainConfService {
   public static getAll = async () => {
      const staff = await AppDataSource.getRepository(MainConf).find();
      return staff;
   };

   public static findByID = async (id: string) => {
      const staff = await AppDataSource.getRepository(MainConf).findOneBy({ id });
      return staff;
   };

   public static findByTitle = async (title: MainType) => {
      const staff = await AppDataSource.getRepository(MainConf).findOneBy({ title });
      return staff;
   };

   public static create = async ({ title, data }: CreateMainConf) => {
      const staff = AppDataSource.getRepository(MainConf).create({ title, data });
      return await AppDataSource.getRepository(MainConf).save(staff);
   };

   public static deleteByID = async (id: string) => {
      const staff = await AppDataSource.getRepository(MainConf).findOneBy({ id });
      if (!staff) throw new Error("Staff not found");
      return await AppDataSource.getRepository(MainConf).delete({ id });
   };
}
