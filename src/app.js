const express = require("express");

const app = express();

app.use(
  "/user",
  (req, res, next) => {
    // Route handler 1
    console.log("Handling the route user 1 !!");
    // res.send("Hello from the server1111!!!");
    next();
  },
  (req, res, next) => {
    // Route handler 2
    console.log("Handling the route user 2 !!");
    // res.send("Hello from the server2222!!!");
    next();
  },
  (req, res, next) => {
    console.log("Handling the route user 3 !!");
    // res.send("Hello from the server 3 !!!");
    next();
  },
  (req, res, next) => {
    console.log("Handling the route user 4 !!");
    // res.send("Hello from the server 4 !!!");
    next();
  },
  (req, res, next) => {
    console.log("Handling the route user 5 !!");
    res.send("Hello from the server 5 !!!");
  }
);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
