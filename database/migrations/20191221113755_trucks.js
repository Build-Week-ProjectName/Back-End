exports.up = function(knex) {
  return knex.schema.createTable("trucks", trucks => {
    trucks.increments();

    trucks.blob("truckImg").notNullable();
    trucks.string("truckName", 128).notNullable();
    trucks.string("truckOwner", 128).notNullable();
    trucks.string("cuisineType", 200).notNullable();
    trucks.string("location_lat");
    trucks.string("location_lon");
    trucks.string("reviews", 400);

    trucks
      .integer("operator_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("operator")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("trucks");
};
