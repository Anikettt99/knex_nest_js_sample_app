import { DatabaseRepository as DB } from 'src/core/db/repositories/Database';
import { InjectModel } from 'src/core/Helpers';
import { OrderModel } from 'src/orders/models/orders.model';
import { OrderContract } from '../contracts/orders.contract';

export class OrderRepository extends DB implements OrderContract {
  @InjectModel(OrderModel)
  model: OrderModel;
  async findCorrespondingCustomer(id: number) {
    const order = await this.findById(id);

    const customer = await order.$relatedQuery('customer');
    return customer;
  }
}
