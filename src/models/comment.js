'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    body: DataTypes.TEXT,
    issueId: DataTypes.NUMBER,
    userId: DataTypes.NUMBER
  }, {});
  Comment.associate = function(models) {
    Comment.belongsTo(models.Issue, {
      foreignKey: 'issueId'
    });
    Comment.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user'
    });
  };
  return Comment;
};