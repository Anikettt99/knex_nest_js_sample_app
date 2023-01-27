import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable('reviewers', function (table) {
      table.increments('id').primary();
      table.string('first_name', 50).notNullable();
      table.string('last_name', 50).notNullable();
    })
    .then(function () {
      console.log('Reviewers Table created!');
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('reviewers');
}
