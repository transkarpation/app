import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm'
import { Post } from './Post';

@Entity()
export class PostDetails {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    metadata: string;

    @OneToOne(type => Post, post => post.details, { cascade: true })
    post: Post
}