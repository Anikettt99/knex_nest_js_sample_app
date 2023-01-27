import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { OrderRepository } from './repositories/database/order.database';

@Module({
  providers: [
    OrdersService,
    {
      provide: 'Order_Repository',
      useClass: OrderRepository,
    },
  ],
  controllers: [OrdersController],
})
export class OrdersModule {}
