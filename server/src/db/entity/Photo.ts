import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";
import {User} from './User'

@Entity()
export class Photo {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name: string;

    @Column("text")
    description: string;

    @Column({type: 'text', nullable: true})
    filePath: string;

    @Column({type: "double", nullable: true})
    views: number;

    @Column({nullable: true})
    isPublished?: boolean;

    @ManyToOne(() => User, user => user.photos, {cascade: true})
    @JoinColumn()
    user: Promise<User>;
}