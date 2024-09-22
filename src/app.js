const express = require("express");

const app = express();

app.get("/User/:userId", (req, res) => {
  console.log(req.params);
  res.send({ firstName: "John", lastName: "Doe" });
});

// THis will only handle GET call to /User
app.get("/User", (req, res) => {
  console.log(req.query);
  res.send({ firstName: "John", lastName: "Doe" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
