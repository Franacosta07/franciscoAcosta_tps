const path = require("path");
const express = require("express");
const { dir } = require("console");
const app = express();
const port = 3030;

app.use(express.static(path.join(__dirname, "public"))); 

//consola
app.listen(port, () => {
    console.log(`Server running in http://localhost:${port}`);
  });

//RUTAS
app.get("/", (req, res) => {
    return res.sendFile(path.join(__dirname, "views", "home.html"));
  })