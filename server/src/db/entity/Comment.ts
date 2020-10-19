import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm'
import { Author } from './Author';
import { Post } from './Post';

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @ManyToOne(type => Author, author => author.comments, {cascade: true})
    author: Promise<Author>

    @ManyToOne(type => Post, (post) => post.comments, {cascade: true})
    post: Promise<Post>
}