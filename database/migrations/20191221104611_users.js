exports.up = function(knex) {
  return knex.schema
    .createTable("roles", tbl => {
      users.increments();

      tbl
        .string("username", 128)
        .notNullable()
        .unique();
      tbl.string("email", 300).notNullable();
      tbl.string("password", 128).notNullable();
    })
    .createTable("users", tbl => {
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
        .integer("users_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("role")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users").dropTableIfExists("roles");
};
