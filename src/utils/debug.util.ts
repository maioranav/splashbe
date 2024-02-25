import { format } from "date-fns";

export const debug = (message: string, config?: DebugOption) => {
   const time = format(new Date(), "dd/MM/yy HH:mm:ss");

   switch (config?.status) {
      case "error":
         console.error("\x1b[31m" + time + " - ERROR - " + message, config.data, "\x1b[0m");
         return;
      case "warning":
         if (!process.env.DEBUG) return;

         console.warn("\x1b[33m" + time + " - WARN - " + message, config.data, "\x1b[0m");
         return;
      case "success":
         if (!process.env.DEBUG) return;

         console.warn("\x1b[32m" + time + " - " + message, config.data, "\x1b[0m");
         return;
      default:
         if (!process.env.DEBUG) return;

         console.info("\x1b[34m" + time + " - INFO - " + message, config?.data, "\x1b[0m");
         return;
   }
};

/** Util function to decode a JWT token */
export const jwtDecode = (token: string) => {
   return JSON.parse(Buffer.from(token.split(".")[1], "base64").toString());
};

interface DebugOption {
   status?: "error" | "warning" | "success";
   data?: Object;
}
