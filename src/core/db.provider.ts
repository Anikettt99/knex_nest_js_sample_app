import { knex } from 'knex';
import { Model } from 'objection';
import { BaseModel } from './db/BaseModel';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    imports: [],
    useFactory: async () => {
      const knex_connection = knex({
        client: 'mysql',
        connection: {
          host: 'localhost',
          port: 3306,
          user: 'root',
          password: 'password',
          database: 'knex_nest_2',
        },
      });
      BaseModel.knex(knex_connection);
      BaseModel.setModulePaths([
        // add your module names here
        'customers',
        'orders',
      ]);
      //BaseModel.setModulePaths(['customers', 'orders']);
      //Model.knex(knex_connection);
      return knex_connection;
    },
  },
];
