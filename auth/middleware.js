module.exports = (req, res, next) => {
  if (req.session && req.session.users) {
    next();
    res.status(400).json({ you: "shall not pass!" });
  }
};
