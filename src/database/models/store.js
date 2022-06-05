"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class store extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  store.init(
    {
      username: DataTypes.STRING,
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      price: DataTypes.FLOAT,
      stock: DataTypes.INTEGER,
      category: {
        type: DataTypes.ENUM(
          "men's clothing",
          "jewelery",
          "electronics",
          "women's clothing"
        ),
      },
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "store",
    }
  );
  return store;
};
