const Client = require('./Client')
const User = require('./User')
theClient = process.argv[2]

Client.findOne({ where: { cli_codigo: theClient }, include: ['bases'] })
  .then((pClient) => {
    console.log(pClient.bases.get('dba_host'));
    User.setLoginInfo({
      host: pClient.bases.get('dba_host'),
      user: pClient.bases.get('dba_login'),
      password: pClient.bases.get('dba_senha'),
      database: pClient.bases.get('dba_base'),
    })
    const People = require('./People')
    People.findAll({ limit: 10 }).then((pRes) => {
      console.log(pRes.length);
    })
  })
