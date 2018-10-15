const Sequelize = require('sequelize');
const db = require('../db');

const Vet = db.define('vet', {
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
  specialty: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  },
});

module.exports = Vet;
