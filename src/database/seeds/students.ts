import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('students').del();

  // Inserts seed entries
  await knex('students').insert([
    { first_name: 'Caleb' },
    { first_name: 'Samantha' },
    { first_name: 'Raj' },
    { first_name: 'Carlos' },
    { first_name: 'Lisa' },
  ]);
}
