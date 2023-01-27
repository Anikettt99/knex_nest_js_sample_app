import { Controller, Get, Param } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Get('/:id')
  async getAllOrders(@Param('id') id: string) {
    const data = await this.ordersService.fetchAll(parseInt(id));
    return data;
  }
}
