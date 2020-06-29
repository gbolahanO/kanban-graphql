'use strict';
module.exports = (sequelize, DataTypes) => {
  const IssueUsers = sequelize.define('IssueUsers', {
    userId: DataTypes.NUMBER,
    issueId: DataTypes.NUMBER
  }, {});
  IssueUsers.associate = function(models) {
    // associations can be defined here
  };
  return IssueUsers;
};