exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("operator")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("operator").insert([
        {
          name: "Jackie",
          truckOwn: "Burger Town1 and Burger Town 2",
          user_id: 1
        },
        {
          name: "Tom and Jerry",
          truckOwn: "Burger Town3 and Burger Town 4",
          user_id: 2
        },
        {
          name: "Peter Pan",
          truckOwn: "Taco Town 2 own Taco Town 3",
          user_id: 5
        }
      ]);
    });
};
