import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';
import { CustomerRepository } from './repositories/database/customer.database';
import { CoreModule } from 'src/core/module';

@Module({
  // imports: [DatabaseModule], // now i have globally decalre the modue using @Global()

  providers: [
    CustomersService,
    {
      provide: 'Customer_Repository',
      useClass: CustomerRepository,
    },
  ],
  controllers: [CustomersController],
})
export class CustomersModule {}
