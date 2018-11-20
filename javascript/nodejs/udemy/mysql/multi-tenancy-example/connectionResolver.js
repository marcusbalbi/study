const Connection = require('./Conncetion')

function ConnectionResolver () {
  this.connections = {}
}

ConnectionResolver.prototype.getConnection = function (pInfo) {
  if (this.connections[pInfo.client]) {
    return this.connections[pInfo.client]
  }
  this.connections[pInfo.client] = new Connection(pInfo)
  return this.connections[pInfo.client]
}

module.exports = new ConnectionResolver()
