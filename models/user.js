'use strict';
const bcrypt   = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  
  User.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };

// checking if password is valid
  User.validPassword = function(password,localPassword) {
    console.log('local db', this.password);
    return bcrypt.compareSync(password,localPassword);
  };

  return User;

};