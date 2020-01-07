exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "bill",
          password: "password",
          email: "bill@gmail.com",
          role: "operator"
        },
        {
          username: "tom",
          password: "password",
          email: "tom@gmail.com",
          role: "diner"
        },
        {
          username: "jack",
          password: "password",
          email: "operator@gmail.com",
          role: "operator"
        },
        {
          username: "dino",
          password: "password",
          email: "diner@gmail.com",
          role: "diner"
        }
      ]);
    });
};
