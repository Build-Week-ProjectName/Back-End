const db = require("../config/dbConfig");

module.exports = {
  find,
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

function findById(id) {
  return db("trucks")
    .where({ id })
    .first();
}

async function add(truck) {
  const [id] = await db("trucks").insert(truck);

  return findById(id);
}

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
