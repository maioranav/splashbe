import express, { Request, Response } from "express";
import { AppDataSource } from "./config/data-source";
import { Staff } from "./model/Staff";
import { AutoLoad } from "./config/autoload";

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
    AutoLoad();
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

const app = express();
app.use(express.json());

app.get("/staff", async function (req: Request, res: Response) {
  const staff = await AppDataSource.getRepository(Staff).find();
  res.json(staff);
});

app.listen(3000);
