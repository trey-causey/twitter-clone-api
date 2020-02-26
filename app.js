const express = require('express');

const { development } = require("./knexfile");

const knex = require("knex")(development);

const app = express();

app.get('/', async (req, res) => {
  const posts = await knex("posts");
  res.send(posts);
})

const port = process.env.PORT || 5500

app.listen(port, () => console.log("Server started!"))