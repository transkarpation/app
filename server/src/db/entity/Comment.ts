import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm'
import { Author } from './Author';
import { Post } from './Post';

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @ManyToOne(type => Author, author => author.comments)
    author: Promise<Author>

    @ManyToOne(type => Post, (post) => post.comments)
    post: Promise<Post>
}