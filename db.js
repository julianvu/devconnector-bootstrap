const mongoose = require("mongoose");
require("dotenv").config();
const mongoURI = process.env.mongoURI;

const connectToDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);

    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectToDB;
