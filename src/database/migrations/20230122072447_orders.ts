import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable('orders', function (table) {
      table.increments('id').primary();
      table.date('order_date');
      table.decimal('amount', 8, 2);
      table.integer('customer_id').unsigned();
      table.foreign('customer_id').references('id').inTable('customers');
    })
    .then(function () {
      console.log('Order Table created!');
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('orders');
}
