exports.up = function up(knex) {
  return knex.schema.createTable("menu_categories", menu_categories => {
    menu_categories.increments();

    menu_categories.string("name", 128).notNullable();

    menu_categories
      .integer("menu_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("menu")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("menu_categories");
};
