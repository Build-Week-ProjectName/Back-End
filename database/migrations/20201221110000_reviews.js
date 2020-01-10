exports.up = function up(knex) {
  return knex.schema.createTable("reviews", reviews => {
    reviews.increments();

    reviews.datetime("date", { precision: 6 }).defaultTo(knex.fn.now(6));
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
