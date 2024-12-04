import { validate } from "class-validator";
import { AppDataSource } from "../config/data-source.config";
import { DeepPartial } from "typeorm";
import { Programma } from "../model/Programma";

export default class ProgrammaService {
   public static getAll = async () => {
      const prog = await AppDataSource.getRepository(Programma).find({
         relations: {
            artista: true
         }
      });
      return prog;
   };

   public static findByID = async (id: string) => {
      const prog = await AppDataSource.getRepository(Programma).findOneBy({ id });
      return prog;
   };

   public static create = async (data: DeepPartial<Programma>) => {
      const prog = AppDataSource.getRepository(Programma).create(data);
      const validationErrors = await validate(prog);
      if (validationErrors?.length > 0) throw new Error(validationErrors + "");

      return await AppDataSource.getRepository(Programma).save(prog);
   };

   public static deleteByID = async (id: string) => {
      const prog = await AppDataSource.getRepository(Programma).findOneBy({ id });
      if (!prog) throw new Error("Staff not found");
      return await AppDataSource.getRepository(Programma).delete({ id });
   };
}
