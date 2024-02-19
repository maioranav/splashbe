import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Programma } from "./Programma";
import { PodcastSession } from "./PodcastSession";

@Entity()
export class Podcast {
  @PrimaryGeneratedColumn()
  id!: string;

  @OneToOne(() => Programma, (p: Programma) => p.podcast)
  programma!: Programma;

  @Column()
  img!: string;

  @OneToMany(() => PodcastSession, (p: PodcastSession) => p.podcast, { onDelete: "CASCADE" })
  sessioni!: PodcastSession[];
}
