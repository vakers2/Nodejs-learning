const { TABLES } = require('../../consts');

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(TABLES.CARD, [{
    title: 'Test card',
    content: 'Some useful content',
    created_at: new Date(),
  }]),

  down: (queryInterface) => queryInterface.bulkDelete(TABLES.CARD, null, {}),
};
