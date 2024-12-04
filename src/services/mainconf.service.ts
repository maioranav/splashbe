import { AppDataSource } from "../config/data-source.config";
import { MainConf } from "../model/MainConf";
import { MainType } from "../model/mainconf.enum";
import { CreateMainConf } from "../types/mainconf.type";
import { validate } from "class-validator";

export default class MainConfService {
   public static getAll = async () => {
      const config = await AppDataSource.getRepository(MainConf).find();
      return config;
   };

   public static findByID = async (id: string) => {
      const config = await AppDataSource.getRepository(MainConf).findOneBy({ id });
      return config;
   };

   public static findByTitle = async (title: MainType) => {
      const config = await AppDataSource.getRepository(MainConf).findOneBy({ title });
      return config;
   };

   public static create = async ({ title, data }: CreateMainConf) => {
      const config = AppDataSource.getRepository(MainConf).create({ title, data });
      if ((await validate(config))?.length) throw new Error("Validation failed!");
      return await AppDataSource.getRepository(MainConf).save(config);
   };

   public static deleteByID = async (id: string) => {
      const config = await AppDataSource.getRepository(MainConf).findOneBy({ id });
      if (!config) throw new Error("Config not found");
      return await AppDataSource.getRepository(MainConf).delete({ id });
   };

   public static validateNonce = async (nonce: string) => {
      const config = await AppDataSource.getRepository(MainConf).findOneBy({
         title: MainType.FESECRET
      });
      if (!config) throw new Error("Frontend secret nonce not found");
      return config.data === nonce;
   };
}
