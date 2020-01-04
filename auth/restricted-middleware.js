const jwt = require("jsonwebtoken");
const secret = require("../config/secrets");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (authorization) {
    const secret = process.env.JWT_SECRET || "this is a secret, it is safe";

    jwt.verify(authorization, secret, (error, decodedJwt) => {
      // if the token doesn't verify
      if (error) {
        res.status(401).json({ you: "shall not pass!" });
        // if it DOES...
      } else {
        req.user = { username: decodedJwt.username, role: decodedJwt.role };
        next();
      }
    });
  } else {
    res.status(400).json({ message: "Please login and try again." });
  }
};
