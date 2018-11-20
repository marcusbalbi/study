const sequelize = require('./sequelize').sequelize
const Sequelize = require('./sequelize').Sequelize
const Base = sequelize.define('bases',
  {
    dba_id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    dba_host: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: true
      }
    },
    dba_base: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: true
      }
    },
    dba_login: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: true
      }
    },
    dba_senha: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: true
      }
    },
    dba_versao_sistema: {
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

module.exports = Base
