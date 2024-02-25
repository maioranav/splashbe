import { AppDataSource } from "./config/data-source.config";
import API from "./model/API";
import { AutoLoad } from "./config/autoload.config";
import { apiConfig } from "./config/app.config";
import { debug } from "./utils/debug.util";

const api = new API(apiConfig);

AppDataSource.initialize()
   .then(() => {
      debug("Data Source has been initialized!", {data: "", status: "success"});
      AutoLoad();
   })
   .catch((err) => {
      debug("Error while initializing DataSource: ", {data: err, status: "error"});
   });

//Run API server
api.listen();
