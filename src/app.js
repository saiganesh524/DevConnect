const express = require("express");

const app = express();

const { adminAuth, userAuth } = require("./middlewares/auth");

// Handle Auth Middleware for all GET, POST, ... requests
app.use("/admin", adminAuth);

app.post("/user/login", (req, res) => {
  res.send("User logged in successfully");
});

app.get("/user/data", userAuth, (req, res) => {
  res.send("User data sent!");
});

app.get("/admin/getAllData", (req, res) => {
  res.send("All data sent!");
});

app.get("/admin/deleteUser", (req, res) => {
  res.send("Deleted a user");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
