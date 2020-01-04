module.exports = role => {
  return function(req, res, next) {
    if (req.decodedJwt.role && req.decodedJwt.role.includes(role)) {
      next();
    } else if (
      req.decodedJwt.role &&
      req.decodedJwt.role.includes("Operator")
    ) {
      next();
    } else {
      res.status(403).json({ you: "don't have permission" });
    }
  };

  // return (req, res, next) => {
  //   if (role === req.users.role) {
  //     next();
  //   } else {
  //     res.status(403).json({ you: "are not authorized" });
  //   }
  // };
};
