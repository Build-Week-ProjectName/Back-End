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
          role: "operator",
          operator_id: 2
        },
        {
          username: "tom",
          password: "password",
          email: "tom@gmail.com",
          role: "diner",
          operator_id: 1
        },
        {
          username: "jack",
          password: "password",
          email: "operator@gmail.com",
          role: "operator",
          operator_id: 3
        },
        {
          username: "dino",
          password: "password",
          email: "diner@gmail.com",
          role: "diner",
          operator_id: 4
        }
      ]);
    });
};
