const Sequelize = require("sequelize");

const sequelize = require("../config/connection");
const Business = require("./business.js");
module.exports = function(sequelize, DataTypes) {
  var Reviews = sequelize.define("Reviews", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1],
    },
    user: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    // businessId: {
    //   type: DataTypes.INTEGER,
    //   // // references: "Businesses",
    //   // // referencesKey: "id",
    //   // references: {
    //   //   model: "Businesses",
    //   //   key: "id",
    //   // },
    // },
  });

  Reviews.associate = function(models) {
    // We're saying that a Reviews should belong to an Author
    // A Reviews can't be created without an Author due to the foreign key constraint
    // Reviews.belongsTo(models.User, {
    //   foreignKey: {
    //     allowNull: true,
    //   },
    // });
    // We're saying that a Reviews should belong to an Author
    // A Reviews can't be created without an Author due to the foreign key constraint
    Reviews.belongsTo(models.Business, {
      foreignKey: {
        allowNull: true,
      },
    });
  };

  return Reviews;
};
