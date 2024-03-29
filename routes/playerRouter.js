const express = require("express");
const bodyParser = require("body-parser");

const playerRouter = express.Router();

playerRouter.use(bodyParser.json());

playerRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("Will send all the players to you!");
  })
  .post((req, res, next) => {
    res.end(
      "Will add the player: " +
        req.body.name +
        " with details: " +
        req.body.description
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /players");
  })
  .delete((req, res, next) => {
    res.end("Deleting all players");
  });

module.exports = playerRouter;
