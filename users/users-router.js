const router = require("express").Router();
const Users = require("../users/users-model");
// const authRequired = require("../auth/restricted-middleware");

router.get("/", (req, res) => {
  Users.getUsers()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

router.get("/:id", authUserId, (req, res) => {
  const id = req.params.id;

  Users.findById(id)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "user not found" });
    });
});

router.put("/:id", authUserId, (req, res) => {
  const id = req.params.id;
  const changes = req.body;

  console.log(id, changes);

  Users.update(id, changes)
    .then(updated => {
      delete updated.password;
      res.status(201).json(updated);
    })
    .catch(err => {
      res.status(500).json({ err });
    });
});

router.delete("/:id", authUserId, (req, res) => {
  const id = req.params.id;

  Users.deleteUser(id)
    .then(deleted => {
      console.log(deleted);
      if (deleted) {
        res.status(200).json({ message: "You made it out. Yaayyy!" });
      } else {
        res
          .status(400)
          .json({ message: "This user with this id doesn't exists." });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    });
});

function authUserId(req, res, next) {
  const id = req.params.id;
  console.log(id);
  Users.findById(id)
    .then(user => {
      if (user) {
        req.user = user;
        console.log(user);
        next();
      } else {
        res.status(404).json({ message: "User Not Found." });
      }
    })
    .catch(err => {
      res.status(500).json({ err });
    });
}

module.exports = router;
