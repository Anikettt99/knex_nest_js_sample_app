import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable('students', function (table) {
      table.increments('id').primary();
      table.string('first_name', 50);
    })
    .then(function () {
      console.log('Students table created');
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('students');
}
