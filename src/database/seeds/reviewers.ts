import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('reviewers').del();

  // Inserts seed entries
  await knex('reviewers').insert([
    { first_name: 'Thomas', last_name: 'Stoneman' },
    { first_name: 'Wyatt', last_name: 'Skaggs' },
    { first_name: 'Kimbra', last_name: 'Masters' },
    { first_name: 'Domingo', last_name: 'Cortes' },
    { first_name: 'Colt', last_name: 'Steele' },
    { first_name: 'Pinkie', last_name: 'Petit' },
    { first_name: 'Marlon', last_name: 'Crafford' },
  ]);
}
