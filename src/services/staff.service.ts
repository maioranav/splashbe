import { AppDataSource } from "../config/data-source.config";
import { Staff } from "../model/Staff";

export default class StaffService {
   public static getAllStaff = async () => {
      const staff = await AppDataSource.getRepository(Staff).find();
      return staff;
   };
}
