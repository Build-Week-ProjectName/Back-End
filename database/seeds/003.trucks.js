exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("trucks")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("trucks").insert([
        {
          id: 1,
          image:
            "https://images.pexels.com/photos/1264937/pexels-photo-1264937.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          truckName: "Get Your Taco On",
          truckOwner: "Bill Gates",
          cuisineType: "Tacos",
          location: "Raleigh, NC"
        },
        {
          id: 2,
          image:
            "https://images.pexels.com/photos/1766682/pexels-photo-1766682.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          truckName: "Burger Town",
          truckOwner: "Dave Ramsey",
          cuisineType: "Burgers",
          location: "Las Vegas, NV"
        },
        {
          id: 3,
          image:
            "https://images.pexels.com/photos/2553651/pexels-photo-2553651.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          truckName: "Waffle me up",
          truckOwner: "Tim Ferriss",
          cuisineType: "Waffles",
          location: "Rochester, NY"
        }
      ]);
    });
};
