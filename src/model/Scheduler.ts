import * as cron from "node-cron";
import MainConfService from "../services/mainconf.service";

export default class Scheduler {
   public scheduleTasks() {
      cron.schedule("0 6 * * *", MainConfService.updateNonce);
   }
}
