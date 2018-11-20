const Client = require('./Client')
const Base = require('./Base')
// running sql directely
// Client.sequelize.query('SELECT * FROM clientes').then((r) => {
//   console.log(r);
// })
// specific class method
// Client.getClientsByBase(3).then((result) => {
//   console.log(result[0].get('cli_nome'));
// })

// updating and find by id
// Client.findById(1, { include: ['bases'] }).then((res) => {
//   res.bases.set('dba_versao_sistema', Date.now())
//   res.bases.save()
//   res.set('cli_nome', 'TESTE')
//   res.save()
//  })

// creating a client
 // let newClient = new Client({ cli_nome: 'teste de cliente', cli_codigo: 'ABC123',
 //  cli_id_bases: 2, cli_imagem_topo: 'etapala.jpg', cli_licenca: 'abc123'})
 // newClient.save().then((res) => {
 //   console.log(res)
 // })
 // getting client and a base of a client
// Client.findById(1).then((res) => {
//   console.log('this is the client:', res.dataValues);
//   res.base().then((pBase) => {
//     console.log('this is the base', pBase.dataValues);
//   })
// })
// transaction
let aClient = { cli_nome: '', cli_codigo: 'ABC123',
 cli_id_bases: 2, cli_imagem_topo: 'etapala.jpg', cli_licenca: 'abc123'}

 let aBase = { dba_host: 'teste de ssssssssssssssssaa', 'dba_base': 'dev_esus_csslientessss',
 dba_login: 'rgesussssssss', dba_senha: 'abc123aaa',
 dba_versao_sistema: '0.2.0'}

Client.sequelize.transaction().then(function (transaction) {
  return Client.create(aClient, {transaction})
    .then(res => Base.create(aBase, {transaction}))
    .then(() => { transaction.commit(); console.log('ok created'); })
    .catch((pErr) => {
      transaction.rollback()
      console.log('just rollback', pErr.message);
    })
})


// return sequelize.transaction().then(function (t) {
//   return User.create({
//     firstName: 'Homer',
//     lastName: 'Simpson'
//   }, {transaction: t}).then(function (user) {
//     return user.addSibling({
//       firstName: 'Lisa',
//       lastName: 'Simpson'
//     }, {transaction: t});
//   }).then(function () {
//     return t.commit();
//   }).catch(function (err) {
//     return t.rollback();
//   });
// });
