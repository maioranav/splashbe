import * as fs from "fs";
import { Request } from "express";
import multer from "multer";
import { randomUUID } from "crypto";
import { ImageUploadRequest } from "../types/main.type";

export default class ImageService {
   private static _instance?: ImageService;

   public static getInstance(): ImageService {
      if (!this._instance) this._instance = new this();
      return this._instance;
   }

   public static checkFolder = (folderName: string): void => {
      fs.access(folderName, fs.constants.F_OK, (err) => {
         if (err)
            fs.mkdir(folderName, { recursive: true }, (error) => {
               if (error) {
                  console.error("Errore durante la creazione della cartella" + folderName);
                  throw new Error("Errore durante la creazione della cartella" + folderName);
               }
            });
      });
   };

   private options: multer.DiskStorageOptions = {
      destination: function (
         req: Request,
         file: Express.Multer.File,
         cb: (error: Error | null, destination: string) => void
      ) {
         cb(null, "./uploads");
      },
      filename: function (
         req: ImageUploadRequest,
         file: Express.Multer.File,
         cb: (error: Error | null, destination: string) => void
      ) {
         const newName = randomUUID() + "." + file.originalname.split(".").pop();
         cb(null, newName);
         req.newFileName = newName;
      }
   };

   private storage: multer.StorageEngine = multer.diskStorage(this.options);

   public upload() {
      return multer({ storage: this.storage });
   }
}
