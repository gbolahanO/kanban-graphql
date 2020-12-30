'use strict';
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      name: 'John Doe',
      email: 'jdoe@mail.com',
      avatarUri: 'https://image.shutterstock.com/image-photo/portrait-smiling-red-haired-millennial-260nw-1194497251.jpg',
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    }, {
      name: 'Avery Spectre',
      email: 'avery@mail.com',
      avatarUri: 'https://randomuser.me/api/portraits/women/90.jpg',
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    }, {
      name: 'Tyler Nun',
      email: 'tyler@mail.com',
      avatarUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQjYBVd9MD-pnIIKGjJS1tdx2PiprjCtF7_X1tvNK87PE1ETh7H',
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
