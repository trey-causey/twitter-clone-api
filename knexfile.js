// Update with your config settings.
const pg = require("pg");
        pg.defaults.ssl = false;
module.exports = {

  development: {
    client: 'postgresql',
    connection: { 
      URI: "postgres://auykhabvswezzt:f961ca9094fc34f0b79f9b8f169ef0395532071701ccd0a2e1c1dabd0160e95b@ec2-52-86-33-50.compute-1.amazonaws.com:5432/d1bp24nhp6dpam",
      host: 'ec2-52-86-33-50.compute-1.amazonaws.com',
      database: 'd1bp24nhp6dpam',
      user: 'auykhabvswezzt',
      password: "f961ca9094fc34f0b79f9b8f169ef0395532071701ccd0a2e1c1dabd0160e95b"
    }
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
