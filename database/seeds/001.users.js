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
        },

        {
          id: 2,
          role: "diner",
          firstName: "Tom",
          lastName: "Jones",
          username: "tom",
          email: "tj@gmail.com",
          password: "password",
          favoriteTruck: "Taco and More",
          businessName: "0987 inc",
          location_lat: "12345657",
          location_lon: "12345675"
        },

        {
          id: 3,
          role: "operator",
          firstName: "Dina",
          lastName: "Rose",
          username: "dina",
          email: "dina@gmail.com",
          password: "password",
          favoriteTruck: "Taco Shack",
          businessName: "xyz inc",
          location_lat: "123456",
          location_lon: "1234567"
        }
      ]);
    });
};
