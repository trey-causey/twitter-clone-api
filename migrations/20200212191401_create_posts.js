exports.up = function (knex) {
  return knex.schema.createTable('posts', function (table) {
    table.increments('id');
    table.string('title');
    table.string('body', 140);
  }).then(async () => {
    await knex("posts").insert([
      { title: "Some title 1", body: "Some body" },
      { title: "Some title 2", body: "Some body else" },
      { title: "Some title 3", body: "Some body elses" }
    ])
  });
};

exports.down = function (knex) {
  //return knex.schema.dropTable("posts")
  return knex.schema.dropTableIfExists("posts");
  
};
