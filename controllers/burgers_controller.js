var express = require('express');
var router = express.Router();
var db = require('../models/');

router.get("/", function(req, res) {
    // Moves on to the following function
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {

  db.Burger.findAll()
    .then(function(dbBurger) {
      console.log(dbBurger);
      
      var hbsObject = { burger: dbBurger };
      return res.render("index", hbsObject);
    });
});

// creates more burgers for the user to devour
router.post("/burgers/create", function(req, res) {
  // allows names to be assigned for different burgers
  db.Burger.create({
    burger_name: req.body.burger_name
  })
    // Collects the information from the created post
  .then(function(dbBurger) {
      // log the result to our terminal/bash window
    console.log(dbBurger);
    res.redirect("/");
  });
});

router.put("/burgers/update", function(req, res) {
  // update devoured burgers to reflect the user's choices
  db.Burger.update({
    devoured: true
  },
    {
      where: {
        id: req.body.burger_id
      }
    }
  ).then(function(dbBurger) {
    res.redirect("/");
  });
});

module.exports = router;