// Update with your config settings.
const pg = require("pg");
        pg.defaults.ssl = true;

module.exports = {

  development: {
    client: 'postgresql',
    // "mur"
    connection:  "postgres://auykhabvswezzt:f961ca9094fc34f0b79f9b8f169ef0395532071701ccd0a2e1c1dabd0160e95b@ec2-23-21-4-176.compute-1.amazonaws.com:5432/d1bp24nhp6dpam",
    ssl: {
      sslmode: 'require',
      rejectUnauthorized : false,
    }
    

    // connection: {
    //   host: 'localhost',
    //   database: 'twitter_clone',
    //   user: 'twitter_user',
    //   password: 'Passw0rd!'}
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
