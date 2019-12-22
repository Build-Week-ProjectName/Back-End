module.exports = role => {
  return function(req, res, next) {
    if (req.decodedJwt.roles && req.decodedJwt.roles.includes(role)) {
      next();
    } else if (
      req.decodedJwt.roles &&
      req.decodedJwt.roles.includes("Operator")
    ) {
      next();
    } else {
      res.status(403).json({ you: "don't have permission" });
    }
  };
};
