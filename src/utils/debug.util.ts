export const debug = (message: string, config?: DebugOption) => {
   if (Boolean(process.env.DEBUG) != false) return;

   switch (config?.status) {
      case "error":
         console.error(message, config.data);
         return;
      case "warning":
         console.warn(message, config.data);
         return;
      default:
         console.info(message, config?.data);
         return;
   }
};

/** Util function to decode a JWT token */
export const jwtDecode = (token: string) => {
   return JSON.parse(Buffer.from(token.split(".")[1], "base64").toString());
};

interface DebugOption {
   status?: "error" | "warning";
   data?: Object;
}
