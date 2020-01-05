const router = require("express").Router();
const Users = require("../users/users-model");
const authRequired = require("../auth/restricted-middleware");
// const checkRole = require("../auth/check-roll-middleware");

router.get("/users", authRequired, (req, res) => {
  Users.find()
    .then(users => {
      res.json({ loggedIn: req.username, users });
    })
    .catch(error => res.send(error));
});

router.post("/:id", authRequired, (req, res) => {
  const users = req.body;
  Users.add(users)
    .then(users => {
      res.json(users);
    })
    .catch(error => res.send(error));
});

module.exports = router;
