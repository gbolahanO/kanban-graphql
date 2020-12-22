'use strict';
module.exports = (sequelize, DataTypes) => {
  const Issue = sequelize.define('Issue', {
    title: DataTypes.STRING,
    type: DataTypes.ENUM(['task', 'bug', 'story']),
    status: {
      type: DataTypes.ENUM(['backlog', 'development', 'progress', 'done']),
      defaultValue: 'backlog'
    },
    priority: DataTypes.ENUM(['highest', 'high', 'medium', 'low', 'lowest']),
    listPosition: DataTypes.NUMBER,
    description: DataTypes.TEXT,
    userId: DataTypes.NUMBER
  }, {});
  Issue.associate = function(models) {
    Issue.hasMany(models.Comment);
    Issue.belongsTo(models.User, {
      foreignKey: 'userId'
    });
    Issue.belongsToMany(models.User, {
      through: 'IssueUsers',
      as: 'assignees',
      foreignKey: 'issueId',
      otherKey: 'userId'
    });
  };
  return Issue;
};