import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { MainType } from "./mainconf.enum";

@Entity()
export class MainConf {
   @PrimaryGeneratedColumn("uuid")
   id!: string;

   @Column({ unique: true })
   title!: MainType;

   @Column({ nullable: true })
   data!: string;
}
