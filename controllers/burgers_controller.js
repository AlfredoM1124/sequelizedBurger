var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

// Import the models
var db = require("./models");

var app = express();

app.use(express.static(__dirname + "./public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride("_method"));
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
  }));
  app.set("view engine", "handlebars");
  
  var routes = require("./controllers/burgers_controller.js");
  
  app.use("/", routes);
  app.use("/update", routes);
  app.use("/create", routes);
  
  
  // listen on port 3306
  var port = process.env.PORT || 3306;
  db.sequelize.sync().then(function() {
    app.listen(port);
  });