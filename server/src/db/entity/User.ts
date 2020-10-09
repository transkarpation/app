import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id!: number | undefined;

    @Column()
    email: string;

    @Column()
    password: string;
}