import { Module } from '@nestjs/common';
import { KnexModule } from 'nest-knexjs';

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
      },
    }),
  ],
})
export class DatabaseModule {}
