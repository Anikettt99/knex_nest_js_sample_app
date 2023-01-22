import { Module } from '@nestjs/common';
import { KnexModule } from 'nest-knexjs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { DatabaseModule } from './database/database.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [DatabaseModule, CustomersModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

/*

@Module({
  imports: [
    KnexModule.forRoot({
      config: {
        client: 'mysql',
        connection: {
          host: 'localhost',
          port: 3306,
          user: 'root',
          password: 'password',
          database: 'knex_nest_2',
        },
        migrations: {
          directory: __dirname + '/src/db/migrations',
          extension: 'ts',
        },
        seeds: {
          directory: __dirname + '/src/db/seeds',
        },
      },
    }),
    CustomersModule,
    OrdersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

*/
