// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
var express = require("express");

var router = express.Router();
var db = require("../models/index.js");
// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  // app.get("/", (req, res) => {
  //   // If the user already has an account send them to the members page
  //   if (req.user) {
  //     res.redirect("/members");
  //   }
  //   res.sendFile(path.join(__dirname, "../public/signup.html"));
  // });
  app.get("/", function(req, res) {
    db.Business.findAll({}).then(function(data) {
      console.log(data);
      var hbsObject = {
        data: data,
      };
      console.log(hbsObject);
      res.render("home", hbsObject);
    });
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/signup", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/business", function(req, res) {
    db.Business.findAll().then(function(data) {
      console.log(data);
      var hbsObject = {
        data: data,
      };
      console.log(hbsObject);
      res.render("results", hbsObject);
    });
  });
  app.get("/createbusiness", function(req, res) {
    res.render("newbiz", {});
  });
  app.get("/business/:id", function(req, res) {
    db.Business.findOne({ where: { id: req.params.id } }).then(function(data) {
      // console.log(data);
      var hbsObject = {
        data: data.dataValues,
      };
      console.log(hbsObject);
      res.render("bizpage", hbsObject);
    });
  });
  // app.get("/business/category/:category", function(req, res) {
  //   db.Business.findAll().then(function(data) {
  //     console.log(data);
  //     var hbsObject = {
  //       data: data.filter((item) => {
  //         console.log(item);
  //         return item.dataValues.category.contains(req.params.category);
  //       }),
  //     };
  //     console.log(hbsObject);
  //     res.render("results", hbsObject);
  //   });
  // });
  app.get("/business/name/:name", function(req, res) {
    db.Business.findOne({ where: { name: req.params.name } }).then(function(
      data
    ) {
      // console.log(data);
      var hbsObject = {
        data: data.dataValues,
      };
      console.log(hbsObject);
      res.render("bizpage", hbsObject);
    });
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });

  app.get("/business/new", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/business.html"));
  });
};
