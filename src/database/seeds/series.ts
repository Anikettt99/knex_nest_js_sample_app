import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('series').del();

  // Inserts seed entries
  await knex('series').insert([
    {
      title: 'Archer',
      released_year: '2009-01-01',
      genre: 'Animation',
    },
    {
      title: 'Arrested Development',
      released_year: '2003-01-01',
      genre: 'Comedy',
    },
    {
      title: "Bob's Burgers",
      released_year: '2011-01-01',
      genre: 'Animation',
    },
    {
      title: 'Bojack Horseman',
      released_year: '2014-01-01',
      genre: 'Animation',
    },
    {
      title: 'Breaking Bad',
      released_year: '2008-01-01',
      genre: 'Drama',
    },
    {
      title: 'Curb Your Enthusiasm',
      released_year: '2000-01-01',
      genre: 'Comedy',
    },
    {
      title: 'Fargo',
      released_year: '2014-01-01',
      genre: 'Drama',
    },
    {
      title: 'Freaks and Geeks',
      released_year: '1999-01-01',
      genre: 'Comedy',
    },
    {
      title: 'General Hospital',
      released_year: '1963-01-01',
      genre: 'Drama',
    },
    {
      title: 'Halt and Catch Fire',
      released_year: '2014-01-01',
      genre: 'Drama',
    },
    {
      title: 'Malcolm In The Middle',
      released_year: '2000-01-01',
      genre: 'Comedy',
    },
    {
      title: 'Pushing Daisies',
      released_year: '2007-01-01',
      genre: 'Comedy',
    },
    {
      title: 'Seinfeld',
      released_year: '1989-01-01',
      genre: 'Comedy',
    },
    {
      title: 'Stranger Things',
      released_year: '2016-01-01',
      genre: 'Drama',
    },
  ]);
}
