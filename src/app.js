const express = require("express");
const app = express();

app.get("/getUserData", (req, res) => {
  try {
    // logic of DB call and get User data
    throw new Error("xcvbnmuiop");
    res.send("user data sent!");
  } catch (err) {
    console.log("Error:", err.message);
    res.status(500).send("Error fetching user data");
  }
});

app.use("/", (err, req, res, next) => {
  if (err) {
    // Log error
    res.status(500).send("Something went wrong");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
