import { Inject, Injectable } from '@nestjs/common';
import { Knex } from 'nestjs-knex';

@Injectable()
export class CustomersService {
  async test() {
    /* const data = await this.knexConnection
      .select(
        'customers.first_name',
        'customers.last_name',
        'orders.order_date',
        'orders.amount',
      )
      .from('customers')
      .join('orders', function () {
        this.on('orders.customer_id', '=', 'customers.id');
      });


    return data;*/
  }
}
