const request = require('../common/request')

module.exports = (pQuery) => {
  return new Promise((resolve, reject) => {
    let q = encodeURIComponent(pQuery)
    request(`search/users?q=${q}`)
      .then((pRes) => {
        resolve(pRes)
      })
      .catch((pErr) => {
        reject('Falha ao Buscar Usuários: ' + pErr.message)
      })
  })
}
