const Sequelize = require('sequelize')
const fs = require('fs')
const UserLoggedIn = require('./User')
function buildSequelize ({host, database, user, password}) {
  const sequelize = new Sequelize(database, user, password, {
    host: host,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
    logging: function (str) {
      const time = new Date()
      fs.appendFile('./queries_client.txt', `query:${time.toString()}--${time.toLocaleTimeString()} ${str}\n`, (err) => {
        if (err) {
          console.log('error on writing sql log');
        }
      })
    }
  });
  sequelize.authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });

    return sequelize
}
const sequelize = buildSequelize(UserLoggedIn.getLoginInfo())
module.exports = {
  sequelize,
  Sequelize
}
