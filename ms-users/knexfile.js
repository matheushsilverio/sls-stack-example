// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'mysql',
    connection: {
      user: 'admin',
      password: 'admin',
      host: 'localhost',
      port: 3306,
      database: 'local',
    },
    migrations: {
      directory: __dirname + '/src/data/migrations',
    },
  },
};
