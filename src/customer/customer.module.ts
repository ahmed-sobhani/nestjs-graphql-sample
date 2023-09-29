import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvoiceModule } from 'src/invoice/invoice.module';
import { CustomerResolver } from './customer.resolver';
import { CustomerService } from './customer.service';
import { CustomerModel } from './models/customer.model';

@Module({
  imports: [forwardRef(() => InvoiceModule), TypeOrmModule.forFeature([CustomerModel])],
  providers: [CustomerResolver, CustomerService],
  exports: [CustomerService]
})
export class CustomerModule {}
