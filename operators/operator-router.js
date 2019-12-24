const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const Operator = require("./operators-model");
const config = require("../config/database");

router.post("/register", (req, res) => {
  let newOper = new Operator({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  });
  Operator.add(newOper, (err, user) => {
    if (err) {
      let message = "";
      if (err.errors.username) message = "Username is already taken. ";
      if (err.errors.email) message += "Email already exists.";
      return res.json({
        success: false,
        message
      });
    } else {
      return res.json({
        success: true,
        message: "Operator registration is successful."
      });
    }
  });
});

router.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  Operator.getOpByUsername(username, (err, operator) => {
    if (err) throw err;
    if (!operator) {
      return res.json({
        success: false,
        message: "Admin not found."
      });
    }

    Operator.comparePassword(password, operator.password, (err, isMatch) => {
      if (err) throw err;
      if (isMatch) {
        const token = jwt.sign(
          {
            type: "operator",
            data: {
              _id: operator._id,
              username: operator.username,
              name: operator.name,
              email: operator.email
            }
          },
          config.secret,
          {
            expiresIn: 604800 // for 1 week time in milliseconds
          }
        );
        return res.json({
          success: true,
          token: "JWT " + token
        });
      } else {
        return res.json({
          success: true,
          message: "Wrong Password."
        });
      }
    });
  });
});

/**
 * Get Authenticated user profile
 */

router.get(
  "/profile",
  passport.authenticate("jwt", {
    session: false
  }),
  (req, res) => {
    return res.json(req.user);
  }
);

module.exports = router;
