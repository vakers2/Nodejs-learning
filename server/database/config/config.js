require('dotenv').config();

module.exports = {
  development: {
    dialect: 'sqlite',
    storage: process.env.STORAGE,
    define: {
      timestamps: false,
    },
  },
  production: {
    dialect: 'sqlite',
    storage: process.env.STORAGE,
    define: {
      timestamps: false,
    },
  },
};
