exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          role: "operator",
          firstName: "bill",
          lastName: "smith",
          username: "bill",
          email: "bill@gmail.com",
          password: "password",
          favoriteTruck: "Taco",
          businessName: "xyz inc",
          location_lat: "123456",
          location_lon: "1234567"
        }
        // {
        //   id: 2,
        //   username: "tom",
        //   password: "password",
        //   email: "tom@gmail.com",
        //   role: "diner"
        // },
        // {
        //   id: 3,
        //   username: "jack",
        //   password: "password",
        //   email: "operator@gmail.com",
        //   role: "operator"
        // },
        // {
        //   id: 4,
        //   username: "dino",
        //   password: "password",
        //   email: "diner@gmail.com",
        //   role: "diner"
        // }
      ]);
    });
};
