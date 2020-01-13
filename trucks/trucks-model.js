const db = require("../config/dbConfig");

module.exports = {
  find,
  getTrucks,
  findById,
  add,
  update,
  remove
};

function find() {
  return db("trucks").select(
    "truckImg",
    "truckName",
    "cuisineType",
    "location",
    "reviews"
  );
}
// function getTrucks() {
//   return db("trucks");
// }
function getTrucks() {
  return db("trucks").then(trucks => {
    trucks.map(item => {
      if (item.isCompleted) {
        item.isCompleted = true;
      } else {
        item.isCompleted = false;
      }
    });
    return trucks;
  });
}

function findById(id) {
  return db("trucks")
    .where({ id })
    .first();
}
async function add(truck) {
  const [id] = await db("trucks").insert(truck);

  return findById(id);
}

// function add(truck) {
//   return db("trucks").insert(truck);
// }

function update(id, changes) {
  return db("trucks")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("trucks")
    .where("id", id)
    .del();
}
