import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('customers').del();
  await knex('customers').insert([
    {
      first_name: 'Boy',
      last_name: 'George',
      email: 'george@gmail.com',
    },
    {
      first_name: 'George',
      last_name: 'Michael',
      email: 'gm@gmail.com',
    },
    {
      first_name: 'David',
      last_name: 'Bowie',
      email: 'david@gmail.com',
    },
    {
      first_name: 'Blue',
      last_name: 'Steele',
      email: 'blue@gmail.com',
    },
    {
      first_name: 'Bette',
      last_name: 'Davis',
      email: 'bette@aol.com',
    },
  ]);
}
