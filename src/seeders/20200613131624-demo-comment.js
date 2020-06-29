'use strict';
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [{
      body: 'Comment 1',
      issueId: 1,
      userId: 1,
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    }, {
      body: 'Comment 2',
      issueId: 1,
      userId: 1,
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    }, {
      body: 'Comment 3',
      issueId: 1,
      userId: 1,
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
