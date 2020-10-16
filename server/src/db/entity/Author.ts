import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm'
import { Post } from './Post';
import { Comment } from './Comment';

@Entity()
export class Author {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @OneToMany(type => Post, post => post.author)
    posts: Promise<Post[]>

    @OneToMany(type => Comment, comment => comment.post)
    comments: Promise<Comment []>
}