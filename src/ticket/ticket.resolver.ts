import { Inject } from '@nestjs/common';
import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateTicketDTO } from './models/ticket.dto';
import { Ticket } from './models/ticket.model';
import { TicketService } from './ticket.service';

@Resolver(of => Ticket)
export class TicketResolver {
    constructor(
        @Inject(TicketService) private ticketService: TicketService
    ){}

    @Query(returns => [Ticket])
    async tickets() {
        return await this.ticketService.findAll()
    }

    @Query(returns => Ticket)
    async ticket(@Args("id") id: string, @Info() info){
        console.log(info.fieldNodes[0].selectionSet.selections)
    //     info.fieldNodes[0].selectionSet.selections.map(item => item.name.value),
    // );
        const ticket = await this.ticketService.findOne(id)
        console.log(ticket)
        return ticket
    }

    @Mutation(returns => Ticket)
    async createTicket(@Args("ticket") ticket: CreateTicketDTO){
        return await this.ticketService.create(ticket)
    }
}
