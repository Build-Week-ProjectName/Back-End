exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("reviews")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("reviews").insert([
        {
          date: "2013.11.4",
          rating: 4,
          content: "The food was really good.",
          menu_id: 2,
          trucks_id: 1
        },
        {
          date: "2013.11.4",
          rating: 3,
          content: "The food was okay.",
          menu_id: 2,
          trucks_id: 1
        },
        {
          date: "2013.11.4",
          rating: 2,
          content: "Cheap but not that good.",
          menu_id: 2,
          trucks_id: 1
        }
      ]);
    });
};
