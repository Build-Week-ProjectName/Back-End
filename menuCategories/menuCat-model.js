const db = require("../config/dbConfig");

module.exports = {
  add,
  update,
  remove
};

async function add(menuCat) {
  const [id] = await db("menuCat").insert(menuCat);

  return findById(id);
}

function update(id, changes) {
  return db("menuCat")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("menuCat")
    .where("id", id)
    .del();
}
