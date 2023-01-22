import { Controller, Get } from '@nestjs/common';
import { CustomersService } from './customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}

  @Get()
  testing() {
    // return this.customersService.test();
    return this.customersService.test();
  }
}
