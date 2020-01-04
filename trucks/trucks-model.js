module.exports = {
  find,
  findById,
  add,
  update,
  remove
};

function find() {
  return db("trucks");
}

function findById(id) {
  return db("trucks")
    .where({ id })
    .first();
}

async function add(trucks) {
  const [id] = await db("trucks").insert(trucks);

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
