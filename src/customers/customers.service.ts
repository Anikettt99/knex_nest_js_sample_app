import { Injectable, Inject } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectConnection } from 'nest-knexjs';

@Injectable()
export class CustomersService {
  //constructor(@InjectConnection() private readonly knex: Knex) {}  // working

  constructor(@Inject('DATABASE_CONNECTION') private readonly knex: Knex) {}
  async test() {
    const data = await this.knex.select('*').from('customers');
    /*await this.knex
      .select(
        'customers.first_name',
        'customers.last_name',
        'orders.order_date',
        'orders.amount',
      )
      .from('customers')
      .join('orders', function () {
        this.on('orders.customer_id', '=', 'customers.id');
      });*/

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
