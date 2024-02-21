import { AppDataSource } from "./config/data-source.config";
import API from "./model/API";
import { AutoLoad } from "./config/autoload.config";
import { apiConfig } from "./config/app.config";

const api = new API(apiConfig);

AppDataSource.initialize()
   .then(() => {
      console.log("Data Source has been initialized!");
      AutoLoad();
   })
   .catch((err) => {
      console.error("Error during Data Source initialization:", err);
   });

//Run API server
api.listen();
