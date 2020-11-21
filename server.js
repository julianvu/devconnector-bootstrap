const express = require("express");
const connectToDB = require("./db");
const path = require("path");

// Init app variable with express
const app = express();

// Connect to MongoDB
connectToDB();

// Init middleware
app.use(express.json({ extended: false }));

// Remove this route in production
// app.get("/", (req, res) => res.send("API Running"));

// Define API routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Look for environment called PORT or on 5000 locally
const PORT = process.env.PORT || 5000;

// Listen on a port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
