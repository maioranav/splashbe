import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Podcast } from "./Podcast";

@Entity()
export class PodcastSession {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  num!: number;

  @Column()
  url!: string;

  @ManyToOne(() => Podcast)
  podcast!: Podcast;
}
