import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { Staff } from "./Staff";

@Entity()
export class Admin {
   @PrimaryGeneratedColumn("uuid")
   id!: string;

   @Column({ unique: true })
   username!: string;

   @Column()
   password!: string;
}
