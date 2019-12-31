exports.up = function(knex) {
  return knex.schema.createTable("menu", tbl => {
    tbl.increments();
    tbl.blob("itemImg").notNullable();
    tbl.string("itemName", 130).notNullable();
    tbl.string("itemDescription", 400).notNullable;
    tbl.integer("itemPrice");

    tbl
      .integer("operator_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("operators")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    tbl
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
