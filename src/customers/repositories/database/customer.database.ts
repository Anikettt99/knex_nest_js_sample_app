import { Injectable } from '@nestjs/common';
import { InjectModel } from '../../../core/Helpers';
import { DatabaseRepository as DB } from '../../../core/db/repositories/Database';
import { CustomerContract } from '../contracts/customers.contract';
import { CustomerModel } from '../../models/customers.model';

@Injectable()
export class CustomerRepository extends DB implements CustomerContract {
  @InjectModel(CustomerModel)
  model: CustomerModel;

  async totalOrdersAmountByCustomers() {
    const connection = CustomerModel.query();
    const data = await connection
      .select('customers.first_name', 'customers.last_name')
      .select(CustomerModel.knex().raw('IFNULL(SUM(amount),0) AS total_amount'))
      .from('customers')
      .join('orders', function () {
        this.on('orders.customer_id', '=', 'customers.id');
      })
      .groupBy('customers.first_name', 'customers.last_name');

    return data;
  }

  async totalNumberOforders() {
    const connection = CustomerModel.query();
    const data = await connection
      .select('customers.first_name', 'customers.last_name')
      .count('* as Total_Orders')
      .join('orders', function () {
        this.on('orders.customer_id', '=', 'customers.id');
      })
      .groupBy('customers.first_name', 'customers.last_name');

    return data;
  }

  async orderData(id: number) {
    const customer = await this.findById(id);

    const orders = await customer.$relatedQuery('orders');

    return orders;
  }
}
