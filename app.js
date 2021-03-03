const express = require('express');

const { development } = require("./knexfile");

const knex = require("knex")(development);

const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', async (req, res) => {
  const posts = await knex("posts");
  res.send(posts);
})

app.post("/tweet", async (req, res) => {
  console.log(req.body);

  await knex("posts").insert({
    title: req.body.title,
    body: req.body.tweet
  });

  res.send("I got your tweet!");
})

const port = process.env.PORT || 5000

app.listen(port, () => console.log('Server started on port ${port} '))