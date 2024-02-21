import "reflect-metadata";
import { DataSource } from "typeorm";
import { Staff } from "../model/Staff";
import { SocialContacts } from "../model/SocialContacts";
import { Programma } from "../model/Programma";
import { Admin } from "../model/Admin";
import { PodcastSession } from "../model/PodcastSession";
import { Podcast } from "../model/Podcast";

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
   subscribers: []
});
