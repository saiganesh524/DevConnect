const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { request } = require("express");

const userAuth = async (req, res, next) => {
  // Logic of checking if req is authorized
  try {
    // Read the token from the request cookies
    const { Token } = req.cookies;
    if (!Token) {
      throw new Error("Token is invalid!!!!");
    }

    // validate the token
    const decodedObj = await jwt.verify(Token, "DEV@Tinder$790");

    //Find the user
    const { _id } = decodedObj;
    const user = await User.findById(_id);
    if (!user) {
      throw new Error("User not found");
    }
    req.user = user;
    next();
  } catch (err) {
    res.status(400).send("ERROR: " + err.message);
  }
};

module.exports = {
  userAuth,
};
