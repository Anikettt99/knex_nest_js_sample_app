import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable('papers', function (table) {
      table.increments('id').primary();
      table.integer('grade');
      table.string('title', 50);
      table.integer('student_id').unsigned();
      table.foreign('student_id').references('id').inTable('students');
    })
    .then(function () {
      console.log('Papers Table Created');
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('papers');
}
