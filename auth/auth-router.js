const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Users = require("../users/users-model.js");
const secret = require("../config/secrets");

/**
 * @api {post} /auth/register/ Login User
 * @apiName LoginUser
 * @apiGroup Auth
 *
 * @apiParam {String} username username
 * @apiParam {String} email email
 * @apiParam {String} password password
 * @apiParam {String} role role
 *
 * @apiSuccess {String} token JWT
 *
 * @apiSuccessExample Successful Reponse:
 * HTTP/1.1 200 OK
 * {
 *   "token": "18927398172c hsdkucbfy voq2 3rj23.41.2,3k4hjd`x8o237c49p8123759[48c17]`"
 * }
 */

router.post("/register", (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 15); // 2 ^ n
  user.password = hash;

  Users.add(user)
    .then(saved => {
      // pass the created user into the genToken() method, and get the token
      const token = genToken(saved);
      // return the user object, and the token.
      res.status(201).json({ created_user: saved, token: token });
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

/**
 * @api {post} /auth/login/  logs in  User
 * @apiName  LoginUser
 * @apiGroup Auth
 *
 * @apiParam {String} username username
 * @apiParam {String} password password
 *
 *
 * @apiSuccess {String} message
 *
 * @apiSuccessExample Successful Reponse:
 * HTTP/1.1 201 OK
 * {
 *   "message": "success"
 * }
 */

router.post("/login", (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        // pass the found user into the genToken() method, and get the token
        const token = genToken(user);
        // returns the found user's username, and the token"
        res.status(200).json({
          id: user.id,
          username: user.username,
          role: user.role,
          token: token
        });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

function genToken(user) {
  // created the payload...
  const payload = {
    user_id: user.user_id,
    username: user.username,
    role: user.role //this comes from the database
  };

  const options = { expiresIn: "1d" };
  const token = jwt.sign(payload, secret.jwtSecret, options);

  return token;
}

module.exports = router;
