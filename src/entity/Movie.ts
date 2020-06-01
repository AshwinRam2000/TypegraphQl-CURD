import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"
import { ObjectType, Field, Int } from "type-graphql";

@ObjectType()
@Entity()
export class Movie extends BaseEntity{
    @Field(() =>Int) 
    @PrimaryGeneratedColumn()
    id: number;
    
    @Field() 
    @Column()
    title: string;

    @Field(() => Int)
    @Column("int", { default: 60 })
    mintues: number;

}