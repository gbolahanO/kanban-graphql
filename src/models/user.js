'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    avatarUri: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Issue);
    User.hasMany(models.Comment);
    User.belongsToMany(models.Issue, {
      through: 'IssueUsers',
      as: 'tasks',
      foreignKey: 'userId',
      otherKey: 'issueId'
    });
  };
  return User;
};