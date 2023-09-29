import { Field, ObjectType } from "@nestjs/graphql";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@ObjectType()
@Entity()
export class Ticket {
    @Field()
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Field()
    @Column()
    name: string

    @Field({
        description: "Email of User",
        name: "email",
        nullable: false
    })
    @Column()
    email: string

    @Field()
    @Column('text')
    text: string

    @Field()
    @CreateDateColumn()
    createdAt: Date

    @Field()
    @UpdateDateColumn()
    updatedAt: Date
}