import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { MainType } from "./mainconf.enum";
import { IsEnum } from "class-validator";

@Entity()
export class MainConf {
   @PrimaryGeneratedColumn("uuid")
   id!: string;

   @Column({ unique: true })
   @IsEnum(MainType)
   title!: MainType;

   @Column({ nullable: true })
   data!: string;
}
