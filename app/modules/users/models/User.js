'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('users', {
    id: DataTypes.INTEGER
  });
  return User;
};