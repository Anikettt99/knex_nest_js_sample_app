import { Injectable, Inject } from '@nestjs/common';
import { OrderContract } from './repositories/contracts/orders.contract';

@Injectable()
export class OrdersService {
  constructor(@Inject('Order_Repository') private order_repo: OrderContract) {}

  async fetchAll(id: number) {
    // const data = await this.order_repo.fetchAll();
    const data = await this.order_repo.findCorrespondingCustomer(id);
    return data;
  }
}
