/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema.createTable('movies', (t) => {
    t.increments('id').primary();
    t.string('imdb_title_id').nullable();
    t.string('title').nullable();
    t.string('original_title').nullable();
    t.string('year').nullable();
    t.string('date_published').nullable();
    t.string('genre').nullable();
    t.string('duration').nullable();
    t.string('country').nullable();
    t.string('language').nullable();
    t.string('director').nullable();
    t.string('writer').nullable();
    t.string('production_company').nullable();
    t.text('actors').nullable();
    t.text('description').nullable();
    t.string('avg_note').nullable();
    t.string('votes').nullable();
    t.string('budget').nullable();
    t.string('usa_gross_income').nullable();
    t.string('worldwide_gross_income').nullable();
    t.string('metascore').nullable();
    t.string('reviews_from_users').nullable();
    t.string('reviews_from_critics').nullable();
    t.dateTime('created_at').defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema.dropTable('movies');
};
