const express = require("express");
const { connectDB } = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json());

app.post("/signup", async (req, res) => {
  // Creating new instance of the User model
  const user = new User(req.body);
  try {
    await user.save();
    res.send("User registered successfully");
  } catch (err) {
    res.status(400).send("Error Saving the User: " + err.message);
  }
});

// User API - GET /user - get a specific user by email
app.get("/user", async (req, res) => {
  // console.log(req.body.email);
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      res.status(404).send("User not found");
    } else {
      res.send(user);
    }
  } catch {
    res.status(400).send("Something went wrong");
  }
});

// Feed API - GET /feed - get all the users from the database
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});

    if (users.length === 0) {
      res.status(404).send("User Not Found");
    } else {
      res.send(users);
    }
  } catch {
    res.status(400).send("Something went wrong");
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
