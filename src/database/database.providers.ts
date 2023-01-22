import { knex } from 'knex';

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
      return knex_connection;
    },
  },
];
