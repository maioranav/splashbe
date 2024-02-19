import "reflect-metadata";
import { DataSource } from "typeorm";
import { Staff } from "../entity/Staff";
import { SocialContacts } from "../entity/SocialContacts";
import { Programma } from "../entity/Programma";
import { Admin } from "../entity/Admin";
import { PodcastSession } from "../entity/PodcastSession";
import { Podcast } from "../entity/Podcast";

require("dotenv").config();

export const AppDataSource = new DataSource({
  type: process.env.TYPEORM_DBTYPE == "postgres" ? "postgres" : "mariadb",
  host: process.env.TYPEORM_DBHOST || "localhost",
  port: parseInt(process.env.TYPEORM_DBPORT || "3306"),
  username: process.env.TYPEORM_DBUSER || "root",
  password: process.env.TYPEORM_DBPASS || "",
  database: process.env.TYPEORM_DBNAME || "splashbe",
  synchronize: true,
  logging: false,
  entities: [Admin, Podcast, PodcastSession, Programma, SocialContacts, Staff],
  migrations: [],
  subscribers: [],
});
