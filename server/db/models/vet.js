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
    defaultValue: [],
  },
  imgUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://via.placeholder.com/300x300',
    validate: {
      isUrl: true,
    },
  },
});

module.exports = Vet;
