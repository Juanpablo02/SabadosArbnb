// Importando el paquete que descargue (EXPRESS)

const express = require("express");

const app = express();

//Atendinedo peticiones

app.get("/api/hoteles/habitaciones", function (req, res) {
  res.send("Hello World");
});

app.post("/api/hoteles/habitaciones", function (req, res) {
  res.send("Bienvenidos");
});

app.listen(3000, function () {
  console.log("Que se dice?");
});
