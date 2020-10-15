import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from 'typeorm'
import { PostDetails } from './PostDetails';

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    text: string;

    @OneToOne(type => PostDetails, (details) => details.post)
    @JoinColumn()
    details: PostDetails
}
