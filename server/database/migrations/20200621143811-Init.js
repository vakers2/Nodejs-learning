const { TABLES } = require('../../consts');

module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable(TABLES.CARD, {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
      },
      created_at: {
        type: DataTypes.DATE,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(TABLES.CARD);
  },
};
