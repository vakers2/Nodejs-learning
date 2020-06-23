require('dotenv').config();

module.exports = {
  development: {
    dialect: 'sqlite',
    storage: process.env.STORAGE,
    define: {
      freezeTableName: true,
      underscored: true,
      updatedAt: 'updated_at',
      createdAt: 'created_at',
    },
  },
  production: {
    dialect: 'sqlite',
    storage: process.env.STORAGE,
    define: {
      freezeTableName: true,
      underscored: true,
      updatedAt: 'updated_at',
      createdAt: 'created_at',
    },
  },
};
