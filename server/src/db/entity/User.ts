import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm'
import {Expose} from 'class-transformer'
import {IsNotEmpty, isNotEmpty} from 'class-validator'
import { Post } from './Post';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    @Expose()
    id: number;

    @Column()
    @Expose()
    @IsNotEmpty()
    email: string;

    @Column()
    @Expose()
    @IsNotEmpty()
    password: string;

    @OneToMany(type => Post, post => post.author)
    posts: Promise<Post []>
}