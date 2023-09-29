import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerModule } from 'src/customer/customer.module';
import { InvoiceResolver } from './invoice.resolver';
import { InvoiceService } from './invoice.service';
import { InvoiceModel } from './models/invoice.model';

@Module({
  imports: [TypeOrmModule.forFeature([InvoiceModel]), forwardRef(() => CustomerModule)],
  providers: [InvoiceResolver, InvoiceService],
  exports: [InvoiceService]
})
export class InvoiceModule {}
