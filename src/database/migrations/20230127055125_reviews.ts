import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable('reviews', function (table) {
      table.increments('id').primary();
      table.decimal('rating', 2, 1);
      table.integer('series_id').unsigned();
      table.integer('reviewer_id').unsigned();
      table.foreign('series_id').references('id').inTable('series');
      table.foreign('reviewer_id').references('id').inTable('reviewers');
    })
    .then(() => {
      console.log('reviews table created');
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('reviews');
}
