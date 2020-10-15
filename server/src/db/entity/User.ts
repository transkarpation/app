import {Entity, Column, PrimaryGeneratedColumn, OneToMany, Unique} from "typeorm";
import {Photo} from './Photo'

@Entity()
@Unique(['email'])
export class User {

    @PrimaryGeneratedColumn()
    id!: number | undefined;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToMany(() => Photo, photo => photo.user)
    photos: Promise<Photo[]>;
}