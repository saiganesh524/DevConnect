const express = require("express");
const { userAuth } = require("../middlewares/auth");
const {
  validateEditProfileData,
  validateEditPassword,
} = require("../utils/validation");
const bcrypt = require("bcrypt");

const profileRouter = express.Router();

profileRouter.get("/profile/view", userAuth, async (req, res) => {
  try {
    res.send(req.user);
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
});

profileRouter.patch("/profile/edit", userAuth, async (req, res) => {
  try {
    if (!validateEditProfileData(req)) {
      throw new Error("Invalid profile edit");
    }

    const loggedInUser = req.user;
    Object.keys(req.body).forEach((key) => (loggedInUser[key] = req.body[key]));
    await loggedInUser.save();

    // res.send(
    //   `${loggedInUser.firstName} ${loggedInUser.lastName}, your profile has been updated successfully`
    // );
    res.json({
      message: `${loggedInUser.firstName} ${loggedInUser.lastName}, your profile has been updated successfully`,
      data: loggedInUser,
    });
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
});

profileRouter.patch("/profile/password", userAuth, async (req, res) => {
  try {
    if (!validateEditPassword(req)) {
      throw new Error("All fields are required");
    }

    const { oldPassword, newPassword, reEnterNewPassword } = req.body;
    const loggedInUser = req.user;
    const isPasswordValid = await loggedInUser.validatePassword(oldPassword);

    if (!isPasswordValid) {
      throw new Error("Enter correct old password");
    }

    if (!(newPassword === reEnterNewPassword)) {
      throw new Error("new password and re-entered new password did not match");
    }

    const encryptUpdatedPassword = await bcrypt.hash(req.body.newPassword, 10);
    loggedInUser.password = encryptUpdatedPassword;
    await loggedInUser.save();

    res
      .status(200)
      .send(`${loggedInUser.firstName} your password updated successfully`);
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
});

module.exports = profileRouter;
