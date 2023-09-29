import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ticket } from './models/ticket.model';
import { TicketResolver } from './ticket.resolver';
import { TicketService } from './ticket.service';

@Module({
  imports: [TypeOrmModule.forFeature([Ticket])],
  providers: [TicketResolver, TicketService],
  exports: [TicketService]
})
export class TicketModule {}
