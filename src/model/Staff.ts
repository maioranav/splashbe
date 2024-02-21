import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { Ruoli } from "./ruoli.enum";
import { SocialContacts } from "./SocialContacts";
import { Programma } from "./Programma";

@Entity()
export class Staff {
   @PrimaryGeneratedColumn("uuid")
   id!: string;

   @Column()
   nome!: string;

   @Column()
   ruolo!: Ruoli;

   @Column({ nullable: true })
   img?: string;

   @OneToOne(() => SocialContacts, (sc: SocialContacts) => sc.staff, {
      onDelete: "CASCADE",
      nullable: true
   })
   @JoinColumn()
   social?: SocialContacts;

   @OneToMany(() => Programma, (p: Programma) => p.artista, { onDelete: "CASCADE", nullable: true })
   programmi?: Programma[];
}
