import { AppDataSource } from "./data-source";
import { Admin } from "../model/Admin";

export const AutoLoad = () => {
  const mainAdmin = new Admin();
  mainAdmin.username = process.env.TYPEORM_ADMIN || "admin";
  mainAdmin.password = process.env.TYPEORM_PASSWORD || "processpw";

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
