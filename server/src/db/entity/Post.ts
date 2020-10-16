import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany} from 'typeorm'
import { PostDetails } from './PostDetails';
import {Comment} from './Comment'

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    text: string;

    @OneToOne(type => PostDetails, (details) => details.post, {cascade: true})
    @JoinColumn()
    details: PostDetails;

    @OneToMany(type => Comment, (comment) => comment.post, {cascade: ['insert']})
    comments: Promise<Comment[]>
}
