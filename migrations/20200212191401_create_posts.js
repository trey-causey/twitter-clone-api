exports.up = function (knex) {
  return knex.schema.createTable('posts', function (table) {
    table.increments('id');
    table.string('title');
    table.string('body');
  }).then(async () => {
    await knex("posts").insert([
      { title: "Some title 1", body: "Some body" },
      { title: "Some title 2", body: "Some body else" }
    ])
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("posts")
};
