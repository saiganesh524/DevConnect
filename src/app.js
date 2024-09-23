const express = require("express");
const { connectDB } = require("./config/database");
const app = express();
const User = require("./models/user");

app.post("/signup", async (req, res) => {
  // Creating new instance of the User model
  const user = new User({
    firstName: "Akshay",
    lastName: "Saini",
    email: "Akshay@Saini.com",
    password: "Akshay@123",
  });

  try {
    await user.save();
    res.send("User registered successfully");
  } catch (err) {
    res.status(400).send("Error Saving the User: " + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("MongoDB Connected...");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.error("Couldn't connect to Mongo");
  });
