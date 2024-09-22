const express = require("express");

const app = express();

app.use("/test", (req, res) => {
  res.send("Hello from the server!!!");
});

app.use("/ganesh", (req, res) => {
  res.send("Hello ganesh!!!");
});

app.use("/", (req, res) => {
  res.send("Hello World!!!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
