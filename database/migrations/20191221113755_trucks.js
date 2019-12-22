exports.up = function(knex) {
  return knex.schema.createTable("trucks", trucks => {
    trucks.increments();

    trucks;
    trucks.blob("truckImg").notNullable();
    trucks.string("name", 128).notNullable();
    trucks.string("cuisineType", 200).notNullable;
    trucks.string("location", 128).notNullable();

    trucks
      .integer("operator_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("operators")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    trucks
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
