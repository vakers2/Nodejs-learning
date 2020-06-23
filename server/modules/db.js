const fs = require('fs');
const path = require('path');
const { Sequelize } = require('sequelize');
const config = require('../database/config/config');

const db = new Sequelize(process.env.NODE_ENV === 'Development' ? config.development : config.production);

const modelsPath = path.resolve('database', 'models');
fs.readdirSync(modelsPath)
  .filter((file) => file.indexOf('.') !== 0 && file.slice(-3) === '.js')
  .forEach((file) => {
    // eslint-disable-next-line global-require,import/no-dynamic-require
    const model = require(path.join(modelsPath, file));
    model.init(db, Sequelize);
  });

Object.values(db.models)
  .filter((model) => typeof model.associate === 'function')
  .forEach((model) => model.associate(db.models));

module.exports = { client: db, ...db.models };
