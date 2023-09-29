import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateTicketDTO {

    @Field()
    name: string

    @Field()
    email: string

    @Field()
    text: string

}