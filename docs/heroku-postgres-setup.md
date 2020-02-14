# Heroku Postgres Setup

## Configure Dependencies

- Open a terminal (Power Shell, Git Bash, etc.)
  - Make sure you have Heroku CLI installed
    - Run `heroku --version`
    - If you see a version number like `heroku/7.38.1 darwin-x64 node-v12.13.0`, you are good to go!
    - If you do not see a version number, download and install Heroku CLI from https://devcenter.heroku.com/articles/heroku-cli
    - If you do not already have an account
      - Go to https://www.heroku.com/ and create an account
      - In your terminal, run `heroku login`
      - Login to your Heroku account

## Create Database

- Create a new Heroku app
  - `heroku create`
- Provision a database
  - `heroku addons:create heroku-postgresql:hobby-dev`
- Get the database URL
    - `heroku config`
    - Grab the value for `DATABASE_URL`
- To test that you did everything correctly so far
  - `psql <insert DATABASE_URL value here>` (you should get a postgres prompt)

## Configure Knex

- Update your `knexfile.js`
    - Add these lines to the top of the file:
      - ```
          const pg = require("pg");
          pg.defaults.ssl = true;
    - Update the development configuration:
      - ```
        development: {
            client: "postgresql",
            connection: "<insert DATABASE_URL value here>"
          }
## Back to Normal

- You should now be able to follow along with the "Start the Server" section [here](../README.md#start-the-server).