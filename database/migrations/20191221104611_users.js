exports.up = function(knex) {
  return knex.schema
    .createTable("users", users => {
      users.increments();

      users
        .string("username", 128)
        .notNullable()
        .unique();
      users.string("email", 300).notNullable();
      users.string("password", 128).notNullable();
      users.string("role").notNullable();
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
    .dropTableIfExists("users")
    .dropTableIfExists("role")
    .dropTableIfExists("users_role");
};
