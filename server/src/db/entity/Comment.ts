import {PrimaryGeneratedColumn, Column, Entity, ManyToOne} from 'typeorm'
import { Post } from './Post';

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @ManyToOne(type => Post, (post) => post.comments, {cascade: true})
    post: Post;
}