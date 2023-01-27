import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable('series', function (table) {
      table.increments('id').primary();
      table.string('title', 100);
      table.date('released_year');
      table.string('genre', 100);
    })
    .then(() => {
      console.log('Series Table is created');
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('series');
}
