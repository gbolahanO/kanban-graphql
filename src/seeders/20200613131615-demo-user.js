'use strict';
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      name: 'John Doe',
      email: 'jdoe@mail.com',
      avatarUri: 'http://lorempixel.com/30/30',
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    }, {
      name: 'Avery Spectre',
      email: 'avery@mail.com',
      avatarUri: 'http://lorempixel.com/30/30',
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    }, {
      name: 'Tyler Nun',
      email: 'tyler@mail.com',
      avatarUri: 'http://lorempixel.com/30/30',
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
