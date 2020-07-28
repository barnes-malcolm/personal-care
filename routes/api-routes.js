// Requiring our models and passport as we've configured it
const db = require("../models");
const Sequelize = require("sequelize");
const passport = require("../config/passport");
const { request } = require("chai");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id,
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    db.User.create({
      email: req.body.email,
      password: req.body.password,
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch((err) => {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id,
      });
    }
  });

  //Get route for all bussinesss
  app.get("/api/allbusiness", function(req, res) {
    db.Business.findAll({}).then(function(dbbusiness) {
      res.json(dbbusiness);
    });
  });
  //Search by Business Name
  app.get("/api/business/name/:query", function(req, res) {
    var response = res;
    db.Business.findAll({
      limit: 10,
      where: {
        // name: { [Sequelize.Op.like]: "%" + req.param.query + "%" },
        name: req.params.query,
      },
    })
      .then(function(data) {
        res.json(data);
      })
      .catch(function(err) {
        console.log(err);
      });
  });
  //To get
  app.get("/api/business/:id", function(req, res) {
    db.Business.findAll({
      where: {
        id: req.params.id,
      },
    }).then(function(dbbusiness) {
      res.json(dbbusiness);
    });
  });

  // Post route for business listing
  app.post("/api/business", (req, res) => {
    console.log(req.body);
    db.Business.create(req.body)
      .then((business) => {
        res.json(business);
      })
      .catch(function(err) {
        console.log(err);
      });
  });
};
