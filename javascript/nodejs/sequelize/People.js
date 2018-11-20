const sequelize = require('./sequelizeClientFactory').sequelize
const Sequelize = require('./sequelizeClientFactory').Sequelize
const People = sequelize.define('pessoas',
  {
    pes_id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    pes_nome: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: true
      }
    }
  },
  {
    timestamps: false
  }
)

module.exports = People
