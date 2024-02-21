import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Staff } from "./Staff";

@Entity()
export class SocialContacts {
   @PrimaryGeneratedColumn("uuid")
   id!: string;

   @OneToOne(() => Staff, (s: Staff) => s.social)
   staff!: Staff;

   @Column({ nullable: true })
   facebook!: string;

   @Column({ nullable: true })
   youtube!: string;

   @Column({ nullable: true })
   sitoweb!: string;

   @Column({ nullable: true })
   instagram!: string;
}
