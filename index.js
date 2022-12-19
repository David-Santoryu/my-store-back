"use strict";

// importem llibreria EXPRESS
const express = require("express");
// importem llibreria CORS
const cors = require("cors");
// importem llibreria MORGAN
const morgan = require("morgan");

// instanciem EXPRESS cap a l'objecte app
const app = express();
//middlewares
//implementen CORS
app.use(cors());
//implentemen MORGAN en mode desenvolupament
app.use(morgan("dev"));
//per passar de json en el body a objectes javascript
app.use(express.json());
//per passar de json url a objectes javascript
app.use(express.urlencoded({ extended: false }));
//importar l'arxiu de rutes de product.routes
const Products = require("./products/routes/product.routes");
//passem la instancia app:
Products.productRoutes(app);

//executem el servidor per escoltar en el port 3000 i la ip localhost:
app.listen(3000, "localhost", () => {
  console.log("Server listening on port %s", 3000);
});
