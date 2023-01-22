import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('orders').del();
  await knex('orders').insert([
    { order_date: '2016-02-10', amount: 99.99, customer_id: 1 },
    { order_date: '2017-11-11', amount: 35.5, customer_id: 1 },
    { order_date: '2014-12-12', amount: 800.67, customer_id: 2 },
    { order_date: '2015-01-03', amount: 12.5, customer_id: 2 },
    { order_date: '1999-04-11', amount: 450.25, customer_id: 5 },
  ]);
}
