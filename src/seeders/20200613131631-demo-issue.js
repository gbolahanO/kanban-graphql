'use strict';
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Issues', [{
      title: 'This is an issue of type: Task.',
      type: 'task',
      status: 'backlog',
      priority: 'highest',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem animi eveniet amet, dolores, magni et vitae nisi illo mollitia aliquam sint. Obcaecati et, quae, necessitatibus ipsam, fugiat autem nemo velit dolor consequatur quam minima facilis esse excepturi tempore maxime ut deserunt ab culpa quia non ad. Ad harum ex recusandae fugit maiores tempora. Tempore magni maiores veritatis mollitia doloribus magnam. Officiis sit nobis autem deserunt consectetur illum reprehenderit commodi ex delectus voluptates, corporis nesciunt sequi quod impedit! Debitis velit a odit! Mollitia rem cum at, natus maxime provident, iure placeat atque quidem dolore tempore voluptas perspiciatis deserunt in officia inventore!",
      userId: 1,
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    }, {
      title: "Click on an issue to see what's behind it.",
      type: 'bug',
      status: 'backlog',
      priority: 'highest',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem animi eveniet amet, dolores, magni et vitae nisi illo mollitia aliquam sint. Obcaecati et, quae, necessitatibus ipsam, fugiat autem nemo velit dolor consequatur quam minima facilis esse excepturi tempore maxime ut deserunt ab culpa quia non ad. Ad harum ex recusandae fugit maiores tempora. Tempore magni maiores veritatis mollitia doloribus magnam. Officiis sit nobis autem deserunt consectetur illum reprehenderit commodi ex delectus voluptates, corporis nesciunt sequi quod impedit! Debitis velit a odit! Mollitia rem cum at, natus maxime provident, iure placeat atque quidem dolore tempore voluptas perspiciatis deserunt in officia inventore!",
      userId: 1,
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    }, {
      title: 'You can use rich text with images in issue descriptions.',
      type: 'bug',
      status: 'development',
      priority: 'highest',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem animi eveniet amet, dolores, magni et vitae nisi illo mollitia aliquam sint. Obcaecati et, quae, necessitatibus ipsam, fugiat autem nemo velit dolor consequatur quam minima facilis esse excepturi tempore maxime ut deserunt ab culpa quia non ad. Ad harum ex recusandae fugit maiores tempora. Tempore magni maiores veritatis mollitia doloribus magnam. Officiis sit nobis autem deserunt consectetur illum reprehenderit commodi ex delectus voluptates, corporis nesciunt sequi quod impedit! Debitis velit a odit! Mollitia rem cum at, natus maxime provident, iure placeat atque quidem dolore tempore voluptas perspiciatis deserunt in officia inventore!",
      userId: 1,
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    }, {
      title: 'Each issue can be assigned priority from lowest to highest.',
      type: 'BUG',
      status: 'BACKLOG',
      priority: 'HIGHEST',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem animi eveniet amet, dolores, magni et vitae nisi illo mollitia aliquam sint. Obcaecati et, quae, necessitatibus ipsam, fugiat autem nemo velit dolor consequatur quam minima facilis esse excepturi tempore maxime ut deserunt ab culpa quia non ad. Ad harum ex recusandae fugit maiores tempora. Tempore magni maiores veritatis mollitia doloribus magnam. Officiis sit nobis autem deserunt consectetur illum reprehenderit commodi ex delectus voluptates, corporis nesciunt sequi quod impedit! Debitis velit a odit! Mollitia rem cum at, natus maxime provident, iure placeat atque quidem dolore tempore voluptas perspiciatis deserunt in officia inventore!",
      userId: 1,
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    }, {
      title: 'Each issue has a single reporter but can have multiple assignees.',
      type: 'bug',
      status: 'progress',
      priority: 'highest',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem animi eveniet amet, dolores, magni et vitae nisi illo mollitia aliquam sint. Obcaecati et, quae, necessitatibus ipsam, fugiat autem nemo velit dolor consequatur quam minima facilis esse excepturi tempore maxime ut deserunt ab culpa quia non ad. Ad harum ex recusandae fugit maiores tempora. Tempore magni maiores veritatis mollitia doloribus magnam. Officiis sit nobis autem deserunt consectetur illum reprehenderit commodi ex delectus voluptates, corporis nesciunt sequi quod impedit! Debitis velit a odit! Mollitia rem cum at, natus maxime provident, iure placeat atque quidem dolore tempore voluptas perspiciatis deserunt in officia inventore!",
      userId: 1,
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    }, {
      title: 'You can track how many hours were spent working on an issue, and how many hours remain.',
      type: 'bug',
      status: 'done',
      priority: 'highest',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem animi eveniet amet, dolores, magni et vitae nisi illo mollitia aliquam sint. Obcaecati et, quae, necessitatibus ipsam, fugiat autem nemo velit dolor consequatur quam minima facilis esse excepturi tempore maxime ut deserunt ab culpa quia non ad. Ad harum ex recusandae fugit maiores tempora. Tempore magni maiores veritatis mollitia doloribus magnam. Officiis sit nobis autem deserunt consectetur illum reprehenderit commodi ex delectus voluptates, corporis nesciunt sequi quod impedit! Debitis velit a odit! Mollitia rem cum at, natus maxime provident, iure placeat atque quidem dolore tempore voluptas perspiciatis deserunt in officia inventore!",
      userId: 1,
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    }, {
      title: 'Try leaving a comment on this issue.',
      type: 'bug',
      status: 'done',
      priority: 'highest',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem animi eveniet amet, dolores, magni et vitae nisi illo mollitia aliquam sint. Obcaecati et, quae, necessitatibus ipsam, fugiat autem nemo velit dolor consequatur quam minima facilis esse excepturi tempore maxime ut deserunt ab culpa quia non ad. Ad harum ex recusandae fugit maiores tempora. Tempore magni maiores veritatis mollitia doloribus magnam. Officiis sit nobis autem deserunt consectetur illum reprehenderit commodi ex delectus voluptates, corporis nesciunt sequi quod impedit! Debitis velit a odit! Mollitia rem cum at, natus maxime provident, iure placeat atque quidem dolore tempore voluptas perspiciatis deserunt in officia inventore!",
      userId: 1,
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Issues', null, {});
  }
};
