import dotenv from "dotenv";
import { ApiConfig } from "../types/main.type";
import StaffController from "../controller/staff.controller";

// Environment constraints
dotenv.config();

export const apiConfig: ApiConfig = {
   name: "Splash Main BE",
   port: Number(process.env.PORT) || 3000,
   controllers: [new StaffController()]
};
