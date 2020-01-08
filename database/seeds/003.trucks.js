exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("trucks")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("trucks").insert([
        {
          truck_image:
            "https://images.pexels.com/photos/1264937/pexels-photo-1264937.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          truck_name: "Get Your Taco On",
          truck_owner: "Bill Gates",
          cuisine_type: "Tacos",
          location_lat: 14256854,
          location_lon: 1245638,
          reviews: "The best tacos in town. ",
          operator_id: 1
        },
        {
          truck_image:
            "https://images.pexels.com/photos/1766682/pexels-photo-1766682.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          truck_name: "Burger Town",
          truck_owner: "Dave Ramsey",
          cuisine_type: "Burgers",
          location_lat: 14256854,
          location_lon: 1245638,
          reviews: "The best burgers in town. ",
          operator_id: 3
        },
        {
          truck_image:
            "https://images.pexels.com/photos/2553651/pexels-photo-2553651.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          truck_name: "Waffle me up",
          truck_owner: "Tim Ferriss",
          cuisine_type: "Waffles",
          location_lat: 14256854,
          location_lon: 1245638,
          reviews: "The best waffles in town. ",
          operator_id: 2
        }
      ]);
    });
};
