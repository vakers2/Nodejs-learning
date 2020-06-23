const { TABLES } = require('../../consts');

module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.addColumn(
      TABLES.CARD,
      'updated_at',
      DataTypes.DATE,
    );
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn(
      TABLES.CARD,
      'updated_at',
    );
  },
};
