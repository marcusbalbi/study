const request = require('../common/request')

module.exports = (pUser) => {
  return new Promise((resolve, reject) => {
    let username = encodeURIComponent(pUser)
    request(`users/${username}`)
      .then((pRes) => {
        resolve(pRes)
      })
      .catch((pErr) => {
        reject('Falha ao Obter Usuários: ' + pErr.message)
      })
  })
}
