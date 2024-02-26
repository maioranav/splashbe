import dotenv from "dotenv";
import { ApiConfig } from "../types/main.type";
import StaffController from "../controller/staff.controller";
import AdminController from "../controller/admin.controller";
import MainConfController from "../controller/mainconf.controller";

// Environment constraints
dotenv.config();

export const apiConfig: ApiConfig = {
   name: "Splash Main BE",
   port: Number(process.env.PORT) || 3000,
   controllers: [new AdminController(), new MainConfController(), new StaffController()]
};
