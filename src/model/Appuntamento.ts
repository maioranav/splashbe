import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Programma } from "./Programma";

@Entity()
export class Appuntamento {
   @PrimaryGeneratedColumn("uuid")
   id!: string;

   @ManyToOne(() => Programma)
   programma!: Programma;

   @Column({ unique: true })
   giorno!: string;

   @Column()
   inizio!: string;

   @Column()
   fine!: string;
}
