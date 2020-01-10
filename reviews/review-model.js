const db = require("../config/dbConfig");

module.exports = {
  add,
  update,
  remove
};

async function add(reviews) {
  const [id] = await db("reviews").insert(reviews);

  return findById(id);
}

function update(id, changes) {
  return db("reviews")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("reviews")
    .where("id", id)
    .del();
}
