const Sequelize = require('sequelize')
const fs = require('fs')
const sequelize = new Sequelize('dev_esus_clientes', 'root', '!@RG!@esus', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  logging: function (str) {
    const time = new Date()
    fs.appendFile('./queries.txt', `query:${time.toString()}--${time.toLocaleTimeString()} ${str}\n`, (err) => {
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
module.exports = {
  sequelize,
  Sequelize
}
