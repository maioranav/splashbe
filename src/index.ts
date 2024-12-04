import { AppDataSource } from "./config/data-source.config";
import API from "./model/API";
import { AutoLoad } from "./config/autoload.config";
import { apiConfig } from "./config/app.config";
import { debug } from "./utils/debug.util";
import ImageService from "./services/image.service";
import Scheduler from "./model/Scheduler";

const api = new API(apiConfig);
const scheduler = new Scheduler();

AppDataSource.initialize()
   .then(() => {
      debug("Data Source has been initialized!", { data: "", status: "success" });
      AutoLoad();
   })
   .catch((err) => {
      debug("Error while initializing DataSource: ", { data: err, status: "error" });
   });

//Check if the folder exists
ImageService.checkFolder("./uploads");

//Run API server
api.listen();
scheduler.scheduleTasks();
