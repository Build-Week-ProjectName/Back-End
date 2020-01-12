const db = require("../database/dbConfig");

module.exports = {
  add,
  find,
  findBy,
  findById,
  getUsers,
  deleteUser,
  update
};
function find() {
  return db("users").select("id", "username", "password");
}

function getUsers() {
  return db("users");
}

function findBy(filter) {
  return db("users")
    .where(filter)
    .first();
}

async function add(user) {
  const [id] = await db("users").insert(user);

  return findById(id);
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}

async function update(id, changes) {
  await db("users")
    .where({ id })
    .update(changes);

  return findById(id);
}

function deleteUser(id) {
  return db("users")
    .where({ id })
    .del();
}
