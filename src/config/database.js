const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://saiganesh:0FgK6MKFvpmKMqLV@nodejs.en1rx.mongodb.net/devTinder"
  );
};

module.exports = { connectDB };
