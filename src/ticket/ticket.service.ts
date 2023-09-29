import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTicketDTO } from './models/ticket.dto';
import { Ticket } from './models/ticket.model';

@Injectable()
export class TicketService {
    constructor(@InjectRepository(Ticket) private ticketRepository: Repository<Ticket>){}

    findOne(id: string): Promise<Ticket> {
        return this.ticketRepository.findOne({ where: { id }})
    }

    findAll() : Promise<Ticket[]> {
        return this.ticketRepository.find()
    }

    create(inputDto: CreateTicketDTO): Promise<Ticket> {
        return this.ticketRepository.save(inputDto)
    }
}
