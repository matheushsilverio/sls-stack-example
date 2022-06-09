// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'pg',
    connection: {
      user: 'user@admin.com',
      password: 'admin',
      host: 'localhost',
      port: 5432,
      database: 'local',
    },
    migrations: {
      directory: __dirname + '/src/data/migrations',
    },
    seeds: {
      directory: __dirname + '/src/data/seeds',
    },
  },
};
