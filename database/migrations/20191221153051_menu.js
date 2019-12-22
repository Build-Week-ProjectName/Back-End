exports.up = function(knex) {
  return knex.schema.createTable("menu", menu => {
    menu;
    menu.increments();
    menu.blob("itemImg");
    menu.string("itemName", 130).notNullable();
    menu.string("itemDescription", 400).notNullable;
    menu.integer("itemPrice");
    menu.string("location", 128).notNullable();

    menu
      .integer("operator_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("operators")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    menu
      .integer("reviews_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("reviews")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("menu");
};
