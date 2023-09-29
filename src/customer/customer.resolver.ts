import { Inject } from '@nestjs/common';
import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { InvoiceService } from 'src/invoice/invoice.service';
import { InvoiceModel } from 'src/invoice/models/invoice.model';
import { CustomerService } from './customer.service';
import { CustomerModel } from './models/customer.model';

@Resolver(of => CustomerModel)
export class CustomerResolver {
    constructor(
        @Inject(CustomerService) private customerService: CustomerService,
        @Inject(InvoiceService) private invoiceService: InvoiceService
    ) { }
    @Query(returns => CustomerModel)
    async customer(@Args('id') id: string): Promise<CustomerModel> {
        return await this.customerService.findOne(id);
    }
    @ResolveField(returns => [InvoiceModel])
    async invoices(@Parent() customer) {
        const { id } = customer;
        console.log(customer);
        return this.invoiceService.findByCustomer(id);
    }
    @Query(returns => [CustomerModel])
    async customers(): Promise<CustomerModel[]> {
        return await this.customerService.findAll();
    }
}
