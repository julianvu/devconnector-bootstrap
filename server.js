const express = require("express");
const connectToDB = require("./db");

// Init app variable with express
const app = express();

// Connect to MongoDB
connectToDB();

app.get("/", (req, res) => res.send("API Running"));

// Define API routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

// Look for environment called PORT or on 5000 locally
const PORT = process.env.PORT || 5000;

// Listen on a port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
