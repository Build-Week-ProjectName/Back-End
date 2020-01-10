exports.up = function(knex) {
  return knex.schema
    .createTable("users", users => {
      users.increments("id");

      users.string("role").notNullable();
      users.string("firstName").notNullable();
      users.string("lastName").notNullable();
      users
        .string("username", 128)
        .notNullable()
        .unique();
      users.string("email", 300).notNullable();
      users.string("password", 128).notNullable();
      users.string("favoriteTruck");
      users.string("businessName");
      users.string("location_lat");
      users.string("location_lon");
    })
    .createTable("role", tbl => {
      tbl.increments();

      tbl
        .string("username", 128)
        .notNullable()
        .unique();
      tbl.string("password", 128).notNullable();
    })
    .createTable("users_role", tbl => {
      tbl
        .integer("role_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("role")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("users_role")
    .dropTableIfExists("users")
    .dropTableIfExists("role");
};
