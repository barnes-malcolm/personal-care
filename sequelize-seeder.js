const seedData = require("./seed_data.js");
// const db = require("./models");
// const sequelize = require("./config/connection");
//console.log(seedData);

var path = require("path");
var Sequelize = require("sequelize");
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/config/config.json")[env];
var db = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

// fs.readdirSync(__dirname)
//   .filter(function(file) {
//     return (
//       file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
//     );
//   })
//   .forEach(function(file) {
//     console.log(path.join(__dirname, file));
//     var model = require(path.join(__dirname, file))(
//       sequelize,
//       Sequelize.DataTypes
//     );
//     //var model = sequelize.import(path.join(__dirname, file));
//     db[model.name] = model;
//   });
var model = require(path.join(__dirname, "/models/business.js"))(
  sequelize,
  Sequelize.DataTypes
);
// var model = sequelize.import(path.join(__dirname, file));
db[model.name] = model;
console.log(model.name);
Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

db.Business.bulkCreate(seedData, { returning: true })
  .then((newB) => {
    console.log(newB);
  })
  .catch((err) => {
    console.log(err);
  });
