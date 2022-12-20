require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

//... and then farther down the file
mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

//Middleware
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

//Body Parser
app.use(express.urlencoded({ extended: false }));

//Show Route

//New Route
app.get("/logs/new", (req, res) => {
    res.render("New");
  });


//Create Route
app.post("/logs", (req, res) => {
    if (req.body.shipIsBroken === "on") {
      req.body.shipIsBroken = true;
    } else {
      req.body.shipIsBroken = false;
    }
    Pokemon.create(req.body, (error, createdLog) => {
      res.redirect("/logs");
    });
  });


//Edit Route

// Server Listener
//////////////////////////////////////////////
app.listen(3000, () => console.log(`listening on 3000`));