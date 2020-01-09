exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("operator")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("operator").insert([
        // {
        //   name: "Jackie",
        //   trucksOwn: "Burger Town1 and Burger Town 2",
        //   users_id: 1
        // },
        // {
        //   name: "Tom and Jerry",
        //   trucksOwn: "Burger Town3 and Burger Town 4",
        //   users_id: 3
        // },
        // {
        //   name: "Peter Pan",
        //   trucksOwn: "Taco Town 2 own Taco Town 3",
        //   users_id: 2
        // }
      ]);
    });
};
