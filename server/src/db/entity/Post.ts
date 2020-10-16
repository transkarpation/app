import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany, CreateDateColumn, UpdateDateColumn, ManyToOne} from 'typeorm'
import { Author } from './Author';
import {Comment} from './Comment'

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column()
    text: string;

    @OneToMany(type => Comment, (comment) => comment.post, {cascade: true})
    comments: Promise<Comment[]>

    @ManyToOne(type => Author, author => author.posts, {cascade: true})
    author: Promise<Author>
}