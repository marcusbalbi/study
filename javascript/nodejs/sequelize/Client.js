const sequelize = require('./sequelize').sequelize
const Sequelize = require('./sequelize').Sequelize
const Base = require('./Base')

const Client = sequelize.define('clientes',
  // Client fields definition
  {
    cli_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    cli_nome: {
      type: Sequelize.STRING,
       validate: {
         notEmpty: true
       }
    },
    cli_codigo: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: true
      }
    },
    cli_imagem_topo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cli_logo_base64: {
      type: Sequelize.STRING
    },
    cli_licenca: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cli_id_bases: {
      type: Sequelize.INTEGER,
      allowNull: false,
    }
  },
  {
    timestamps: false
  }
);
// relations
Client.belongsTo(Base, { as: 'bases', foreignKey: `cli_id_bases` })

// class specific function
Client.getClientsByBase = function (id) {
  return this.sequelize.query('select * from clientes where cli_id_bases = :id', {
     replacements: { id },
     model: Client,
     type: Sequelize.QueryTypes.SELECT
  })
}

//
Client.allWithBases = function () {
  let include = [{
    model: Base,
    as: 'bases',
    attributes: ['dba_id', 'dba_host']
  }]
  return Client.findAll({ include, attributes: ['cli_nome', 'cli_id'] })
}

Client.prototype.base = function () {
  return Base.findById(this.get('cli_id_bases'))
}


module.exports = Client
