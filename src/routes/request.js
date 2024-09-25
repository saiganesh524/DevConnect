const express = require("express");
const { userAuth } = require("../middlewares/auth");

const requestsRouter = express.Router();

requestsRouter.post("/sendConnectionRequest", userAuth, async (req, res) => {
  try {
    const user = req.user;
    // sending a connection request
    res.send(user.firstName + " sent the connection request");
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
});

module.exports = requestsRouter;
