const path = require("path");
const express = require("express");
const { dir } = require("console");
const app = express();
const port = 3030;

//INSTALAR NODEMON EJECUTANDO >> "npm i -g nodemon"
app.use(express.static(path.join(__dirname, "public")));

//RUTAS
app.get("/", (req, res) => {
  return res.sendFile(path.join(__dirname, "views", "index.html"));
});
app.get("/clarke", (req, res) => {
  return res.sendFile(path.join(__dirname, "views", "clarke.html"));
});
app.get("/babbage", (req, res) => {
  return res.sendFile(path.join(__dirname, "views", "babbage.html"));
});
app.get("/berners-lee", (req, res) => {
  return res.sendFile(path.join(__dirname, "views", "berners-lee.html"));
});
app.get("/hamilton", (req, res) => {
  return res.sendFile(path.join(__dirname, "views", "hamilton.html"));
});
app.get("/hopper", (req, res) => {
  return res.sendFile(path.join(__dirname, "views", "hopper.html"));
});
app.get("/lovelace", (req, res) => {
  return res.sendFile(path.join(__dirname, "views", "lovelace.html"));
});
app.get("/turing", (req, res) => {
  return res.sendFile(path.join(__dirname, "views", "turing.html"));
});

app.listen(port, () => {
  console.log(`Server running in http://localhost:${port}`);
});
//cargar en casa
