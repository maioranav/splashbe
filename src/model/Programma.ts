import {
   Column,
   Entity,
   JoinColumn,
   ManyToOne,
   OneToOne,
   PrimaryGeneratedColumn
} from "typeorm";
import { Staff } from "./Staff";
import { Podcast } from "./Podcast";

@Entity()
export class Programma {
   @PrimaryGeneratedColumn("uuid")
   id!: string;

   @Column()
   titolo!: string;

   @Column()
   img!: string;

   @ManyToOne(() => Staff)
   artista!: Staff;

   @OneToOne(() => Podcast, (p: Podcast) => p.programma, { onDelete: "CASCADE", nullable: true })
   @JoinColumn()
   podcast!: Podcast;

   //appuntamenti
}
