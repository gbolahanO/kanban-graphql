'use strict';
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('IssueUsers', [{
      userId: 1,
      issueId: 1,
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    }, {
      userId: 2,
      issueId: 1,
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    }, {
      userId: 3,
      issueId: 1,
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('IssueUsers', null, {});
  }
};
