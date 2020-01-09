exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("menu")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("menu").insert([
        {
          id: 1,
          image:
            "https://thedcpost.com/wp-content/uploads/2019/07/tai-s-captures-JiRSy0GfqPA-unsplash-1024x570.jpg",
          name: "Taco",
          description: "Chicken, Beef, Fish or Veggie",
          price: "2.00",
          reviews: "Good Food",
          trucks_id: 2,
          operator_id: 3
        },
        {
          id: 2,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvT_jVh-iB4X-pwG_Ga49GIHOnMYv73cPiW5CuzRxzVw4YQZ90&s",
          name: "Burgers",
          description: "Veggie, Ground Beef or Chicken",
          price: "6.00",
          reviews: "Good Food",
          trucks_id: 1,
          operator_id: 2
        },
        {
          id: 3,
          image:
            "https://images.pexels.com/photos/203089/pexels-photo-203089.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          name: "Vegan Sandwich",
          description:
            "Made with all plant base ingredients. No animal by products.",
          price: "7.00",
          reviews: "Good Food",
          trucks_id: 1,
          operator_id: 2
        }
      ]);
    });
};
