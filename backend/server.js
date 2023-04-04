const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
//importtation du module routes
const employeesRoutes = require("./routes/employeesRoutes");
const productsRoutes = require("./routes/productsRoutes");
const authRoutes = require("./routes/authRoutes");
const verifyToken = require("./verifyToken");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


app.use("/employees", verifyToken, employeesRoutes);



app.use("/products", productsRoutes);
app.use("/auth", authRoutes);
// localhost:5000/auth/register (methde post)
mongoose
  .connect(
    "mongodb+srv://hichem:hichem@cluster0.ummopnw.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("base de donneés connectée!");
  });

app.listen(5000, () => console.log("serveur fonctionne ! !!!!"));

//
