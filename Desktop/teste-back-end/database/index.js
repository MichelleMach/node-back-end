const Sequelize = require('sequelize');
const config = require('../config/database');

const connection = new Sequelize(config)

const User = require('../app/models/User')
User.init(connection)

module.exports = connection