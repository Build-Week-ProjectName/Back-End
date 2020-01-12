require("dotenv").config();

const jwt = require("jsonwebtoken");
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const server = express();

const authRouter = require("../auth/auth-router.js");
const authenticate = require("../auth/restricted-middleware");
const usersRouter = require("../users/users-router.js");
const menuRouter = require("../menu/menu-router");
const trucksRouter = require("../trucks/trucks-router");
const reviewsRouter = require("../reviews/reviews-router");
const operatorRouter = require("../operators/operator-router");

server.use(morgan("dev"));
server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/docs", express.static("./docs"));

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);
server.use("/api/menu", menuRouter);
server.use("/api/trucks", trucksRouter);
server.use("/api/reviews", reviewsRouter);
server.use("/api/operator", authenticate, operatorRouter);

server.get("/", (req, res) => {
  res.send("Backend is responding");
});

server.get("/token", (req, res) => {
  const payload = {
    subject: "happyuser",
    userid: "jackieO",
    favoriteGame: "basketball"
  };

  const secret = "didyouknowthatiknowthisstuff";
  const options = {
    expiresIn: "1h"
  };

  const token = jwt.sign(payload, secret, options);

  res.json(token);
});

module.exports = server;
