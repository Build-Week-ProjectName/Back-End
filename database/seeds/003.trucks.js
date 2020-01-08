exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("trucks")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("trucks").insert([
        {
          operator_id: 1,
          truckImg:
            "https://images.pexels.com/photos/1264937/pexels-photo-1264937.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          truckName: "Get Your Taco On",
          truckOwner: "Bill Gates",
          cuisineType: "Tacos",
          location_lat: 14256854,
          location_lon: 1245638,
          reviews: "The best tacos in town. "
        },
        {
          operator_id: 1,
          truckImg:
            "https://images.pexels.com/photos/1766682/pexels-photo-1766682.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          truckName: "Burger Town",
          truckOwner: "Dave Ramsey",
          cuisineType: "Burgers",
          location_lat: 14256854,
          location_lon: 1245638,
          reviews: "The best burgers in town. "
        },
        {
          operator_id: 1,
          truckImg:
            "https://images.pexels.com/photos/2553651/pexels-photo-2553651.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          truckName: "Waffle me up",
          truckOwner: "Tim Ferriss",
          cuisineType: "Waffles",
          location_lat: 14256854,
          location_lon: 1245638,
          reviews: "The best waffles in town. "
        }
      ]);
    });
};