require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const PORT = process.env.PORT;
const Logs = require("./models/logs");
const methodOverride = require("method-override");

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

//Index Route
app.get("/logs", (req, res) => {
  Logs.find({}, (error, allLog) => {
    res.render("Index", {
      logs: allLog,
    });
  });
});

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
  Logs.create(req.body, (error, createdLog) => {
    res.redirect("/logs");
  });
});

// Show Route
app.get("/logs/:id", (req, res) => {
  Logs.findById(req.params.id, (err, foundLog) => {
    res.render("Show", {
      logs: foundLog,
    });
  });
});

//Edit Route
app.get("/pokemon/:id/edit", (req, res) => {
    // get the id from params
    const id = req.params.id;
    // get the fruit from the database
    Logs.findById(id)
      .then((log) => {
        // render Edit page and send fruit data
        res.render("Edit", { log });
      })
      // send error as json
      .catch((error) => {
        console.log(error);
        res.json({ error });
      });
  });

//Delete Route
app.delete("/logs/:id", (req, res) => {
  Logs.findByIdAndRemove(req.params.id, (log) => {
    res.redirect("/logs"); //redirect to the index
  });
});

// Server Listener
//////////////////////////////////////////////
app.listen(3000, () => console.log(`listening on 3000`));
