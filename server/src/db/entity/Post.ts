import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinTable} from 'typeorm'
import { Category } from './Category';
import {Comment} from './Comment'
import { User } from './User';
import {Expose} from 'class-transformer';
import {IsNotEmpty} from 'class-validator';

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    @Expose()
    id: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column()
    @Expose()
    @IsNotEmpty()
    title: string;

    @Column()
    @Expose()
    @IsNotEmpty()
    text: string;

    @OneToMany(type => Comment, (comment) => comment.post, {cascade: ['insert']})
    comments: Promise<Comment[]>

    @ManyToOne(type => User, user => user.posts, {cascade: ['insert']})
    author: Promise<User>

    @ManyToMany(type => Category, category => category.posts, {cascade: true})
    @JoinTable()
    categories: Promise<Category []>
}