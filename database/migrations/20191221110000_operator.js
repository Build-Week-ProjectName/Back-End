exports.up = function(knex) {
  return knex.schema.createTable("operator", operator => {
    operator.increments("id");
    operator.string("name", 128).notNullable();
    operator.string("trucksOwn").notNullable();

    operator
      .integer("users_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("operator");
};
