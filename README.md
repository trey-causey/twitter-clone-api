# Twitter Clone API

## Getting Started

- Clone this repo onto your computer:
  - `git clone https://github.com/lindenmelvin/twitter-clone-api.git`
- Move into the directory
  - `cd twitter-clone-api`

## Configure Dependencies

- Open a terminal (Power Shell, Git Bash, etc.)
  - Make sure you have Node installed
    - Run `node --version`
    - If you see a version number like `v13.7.0`, you are good to go!
    - If you do not see a version number, download and install Node.js from https://nodejs.org/en/download/
  - Make sure you have Heroku CLI installed
    - Run `heroku --version`
    - If you see a version number like `heroku/7.38.1 darwin-x64 node-v12.13.0`, you are good to go!
    - If you do not see a version number, download and install Heroku CLI from https://devcenter.heroku.com/articles/heroku-cli
    - If you do not already have an account
      - Go to https://www.heroku.com/ and create an account
      - In your terminal, run `heroku login`
      - Login to your Heroku account
  - Make sure you have Postgres installed
    - Run `psql --version`
    - If you see a version number like `psql (PostgreSQL) 12.1`, you are good to go!
    - If you do not see a version number, download and install Postgres from https://www.postgresql.org/download/
    - Try to login to postgres by running `psql postgres postgres`
    - If you are asked for a password that you cannot remember or you are unable to get postgres working on your machine, you can use Heroku to handle your database. [Follow this guide](./docs/heroku-postgres-setup.md) to setup a remote Heroku postgres connection.

## Start the Server

- Install dependencies
  - `npm install`
- Run database migrations
  - `knex migrate:latest`
- Start the server
  - `npm start`
- View in the browser
  - In a web browser, visit http://localhost:5000