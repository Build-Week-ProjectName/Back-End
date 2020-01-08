const router = require("express").Router();
const Users = require("../users/users-model");
const authRequired = require("../auth/restricted-middleware");

router.get("/api/users", authRequired, (req, res) => {
  Users.find()
    .then(users => {
      res.json({ loggedIn: req.username, users });
    })
    .catch(error => res.send(error));
});

// router.post("/", authRequired, (req, res) => {
//   const users = req.body;
//   Users.add(users)
//     .then(users => {
//       res.json(users);
//     })
//     .catch(error => res.send(error));
// });

module.exports = router;
