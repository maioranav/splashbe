import { AppDataSource } from "./data-source.config";
import { Admin } from "../model/Admin";
import AdminService from "../services/admin.service";

export const AutoLoad = async () => {
   const mainAdmin = new Admin();
   mainAdmin.username = process.env.TYPEORM_ADMIN ?? "admin";
   mainAdmin.password = await AdminService.passwordEncrypt(
      process.env.TYPEORM_PASSWORD ?? "password"
   );

   try {
      AppDataSource.transaction(async (manager) => {
         const isSaved = await manager.findOneBy(Admin, { username: mainAdmin.username });
         if (!isSaved) return manager.save(mainAdmin);

         isSaved.password = mainAdmin.password;
         manager.save(isSaved);
      });
   } catch (e) {
      console.error(e);
   }
};
