import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable('customers', function (table) {
      table.increments('id').primary();
      table.string('first_name', 50);
      table.string('last_name', 50);
      table.string('email', 50);
    })
    .then(function () {
      console.log('Customer Table created!');
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('customers');
}
