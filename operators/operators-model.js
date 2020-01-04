const db = require("../config/dbConfig");

module.exports = {
  create,
  get,
  getTrucksById,
  update,
  getById,
  remove
};

function create(operator) {
  return db("operators").insert(operator);
}

function get() {
  return db("operators");
}

function getById(id) {
  return db("operator")
    .where({ id })
    .first();
}

//get trucks by operator id
function getTrucksById(operator_id) {
  return db("trucks")
    .join("operator ", "operator.id", "trucks.operator_id")
    .where("trucks.operator_id", "=", operator_id);
}

function update(id, changes) {
  return db("operator")
    .where({ id })
    .update(changes)
    .then(ids => ({ id: ids[0], changes }));
}

function remove(id) {
  return db("operator")
    .delete()
    .where({ id });
}
