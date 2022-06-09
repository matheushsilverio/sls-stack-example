const csv = require('csv-parser');
const fs = require('fs');

async function moviesSeed(knex) {
  const select = await knex('movies').select().limit(1);
  if (select.length > 0) {
    return;
  }

  const movies = [];
  const readStream = fs
    .createReadStream('src/data/seeds/data/imdb_movies.csv')
    .pipe(
      csv([
        'imdb_title_id',
        'title',
        'original_title',
        'year',
        'date_published',
        'genre',
        'duration',
        'country',
        'language',
        'director',
        'writer',
        'production_company',
        'actors',
        'description',
        'avg_note',
        'votes',
        'budget',
        'usa_gross_income',
        'worldwide_gross_income',
        'metascore',
        'reviews_from_users',
        'reviews_from_critics',
      ]),
    );
  let count = 50000;
  for await (let chunk of readStream) {
    count++;
    if (count > 77000 && count < 78000) {
      let movie = chunk;
      movie.date_published = new Date(movie.date_published);
      movies.push(movie);
      console.log(movie.title);
      await knex('movies').insert(movie);
    }
  }
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function seed(knex) {
  await Promise.all([moviesSeed(knex)]).catch((err) => {
    console.log(err);
  });
  console.log('seeds finalizados');
};
