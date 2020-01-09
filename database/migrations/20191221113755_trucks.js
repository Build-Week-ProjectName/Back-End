exports.up = function(knex) {
  return knex.schema.createTable("trucks", trucks => {
    trucks.increments("id");

    trucks.string("truck_image").notNullable();
    trucks.string("truck_name", 128).notNullable();
    trucks.string("truck_owner", 128).notNullable();
    trucks.string("cuisine_type", 200).notNullable();
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
