const db = require("../config/dbConfig");

module.exports = {
  find,
  findById,
  add,
  update,
  remove
};

function find() {
  return db("menu");
}

function findById(id) {
  return db("menu")
    .where({ id })
    .first();
}

function add(menu) {
  return db("menu")
    .insert(menu)
    .then(ids => {
      return findById(ids[0]);
    });
}

function update(id, changes) {
  return db("menu")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("menu")
    .where("id", id)
    .del();
}
