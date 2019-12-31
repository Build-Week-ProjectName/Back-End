exports.up = function(knex) {
  return knex.schema.createTable("trucks", tbl => {
    tbl.increments();

    tbl.blob("truckImg").notNullable();
    tbl.string("truckName", 128).notNullable();
    tbl.string("truckOwner", 128).notNullable();
    tbl.string("cuisineType", 200).notNullable();
    tbl.string("location", 128).notNullable();

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
  return knex.schema.dropTableIfExists("trucks");
};
