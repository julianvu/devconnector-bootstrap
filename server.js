const express = require("express");

// Init app variable with express
const app = express();

app.get("/", (req, res) => res.send("API Running"));

// Look for environment called PORT or on 5000 locally
const PORT = process.env.PORT || 5000;

// Listen on a port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
