exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("menuCategories")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("menuCategories").insert([
        { id: 1, name: "Drinks" },
        { id: 2, name: "Entries" },
        { id: 3, name: "Sides" }
      ]);
    });
};
