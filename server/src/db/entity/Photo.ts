import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Photo {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    name: string;

    @Column("text")
    description: string;

    @Column()
    filename: string;

    @Column({type: "double", nullable: true})
    views: number;

    @Column({nullable: true})
    isPublished?: boolean;
}