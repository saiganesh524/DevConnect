const express = require("express");

const app = express();

app.use("/User", (req, res) => {
  res.send("HAHAHAHAHAHA");
});

// THis will only handle GET call to /User
app.get("/User", (req, res) => {
  res.send({ firstName: "John", lastName: "Doe" });
});

app.post("/User", (req, res) => {
  // Save Data to the database
  res.send("Data successfully saved to the database");
});

app.delete("/User", (req, res) => {
  // Delete Data from the database
  res.send("Data successfully deleted from the database");
});

// this will match all the HTTP method API calls to /test
app.use("/test", (req, res) => {
  res.send("Hello from the server!!!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
