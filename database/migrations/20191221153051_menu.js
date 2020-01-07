exports.up = function(knex) {
  return knex.schema.createTable("menu", tbl => {
    tbl.increments();
    tbl.blob("itemImg").notNullable();
    tbl.string("itemName", 130).notNullable();
    tbl.string("itemDescription", 400).notNullable;
    tbl.integer("itemPrice");
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
