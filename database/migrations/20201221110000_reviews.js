exports.up = function up(knex) {
  return knex.schema.createTable("reviews", reviews => {
    reviews.increments();

    reviews.integer("date");
    reviews.integer("rating");
    reviews.string("content", 250);

    reviews
      .integer("menu_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("menu")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    reviews
      .integer("trucks_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("trucks")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("reviews");
};
