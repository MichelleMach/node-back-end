// const Sequelize = require('sequelize');
// const sequelize = new Sequelize('node', 'root', '1234', {
//   dialect: "mysql",
//   host: 'localhost'
// })

// module.exports = sequelize;


module.exports = {
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "1234",
  database: "node",
  define: {
    timestamp: true,
    underscored: true
  }
}

