import { Injectable, Inject } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectConnection } from 'nest-knexjs';
import { BaseValidator } from 'src/core/validator/basevalidator';
import { InjectModel } from 'src/decorators/injectModel';
import { CreateCustomerDto } from './dtos/create-customer.dto';
import { CustomerModel } from './models/customers.model';
import { CustomerContract } from './repositories/contracts/customers.contract';

@Injectable()
export class CustomersService {
  constructor(
    @Inject('Customer_Repository') private customer_repo: CustomerContract,
    private validator: BaseValidator,
  ) {}
  async fetchById(id: number) {
    const data = this.customer_repo.findById(id);
    return data;
  }

  async fetchAll() {
    const data = this.customer_repo.fetchAll();
    return data;
  }

  async create(input) {
    // await this.validator.fire(input, CreateCustomerDto);
    const data = this.customer_repo.create(input);
    return data;
  }

  async totalOrderAmount() {
    const data = await this.customer_repo.totalOrdersAmountByCustomers();
    return data;
  }

  async totalNoOfOrders() {
    const data = await this.customer_repo.totalNumberOforders();
    return data;
  }

  async allOrdersData(id: number) {
    const data = await this.customer_repo.orderData(id);

    return data;
  }
}

/*  private knex = knex({
    client: 'mysql',
    connection: {
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: 'password',
      database: 'knex_nest_2',
    },
  });*/
