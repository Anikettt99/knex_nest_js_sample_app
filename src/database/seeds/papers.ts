import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('papers').del();

  // Inserts seed entries
  await knex('papers').insert([
    { student_id: 1, title: 'My first Book Report', grade: 60 },
    { student_id: 1, title: 'My second Book Report', grade: 75 },
    { student_id: 2, title: 'Russian Lit Through The Ages', grade: 94 },
    { student_id: 2, title: 'The Art Of The Essay', grade: 98 },
    { student_id: 4, title: 'Borges and Magical Realism', grade: 89 },
  ]);
}
