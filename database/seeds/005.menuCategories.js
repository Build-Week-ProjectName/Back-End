exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("menu_Categories")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("menu_Categories").insert([
        { name: "Drinks", menu_id: 2 },
        { name: "Entries", menu_id: 1 },
        { name: "Sides", menu_id: 3 }
      ]);
    });
};
