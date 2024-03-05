import express, { Request, Response } from "express";
import { Controller, ImageUploadRequest } from "../types/main.type";
import AuthMiddleware from "../middleware/auth.middleware";
import ImageService from "../services/image.service";

export default class ImagesController implements Controller {
   public path = "/uploads";
   public router = express.Router();
   public ImagesService = ImageService.getInstance().upload();

   constructor() {
      this.initRoutes();
   }

   private initRoutes() {
      //   this.router.use(express.static(__dirname + "/public"));
      this.router.use("/", express.static("uploads"));
      this.router.post(
         "/",
         AuthMiddleware.verifyToken,
         this.ImagesService.single("image"),
         this.uploadCover
      );
   }

   private uploadCover = async (request: ImageUploadRequest, response: Response) => {
      response.status(200).json({ filename: request.newFileName });
   };
}
