exports.up = function(knex) {
  return knex.schema.createTable("menu", tbl => {
    tbl.increments("id");
    tbl.string("image").notNullable();
    tbl.string("name", 130).notNullable();
    tbl.string("description", 400).notNullable();
    tbl.string("price");
    tbl.string("category");
    tbl.string("reviews", 300);

    tbl
      .integer("trucks_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("trucks")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    tbl
      .integer("operator_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("operator")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("menu");
};
