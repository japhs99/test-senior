const { DataTypes } = require('sequelize');
const sequelize = require('../connection');

const User = sequelize.define('User', {
  // Définition des attributs du modèle User
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
