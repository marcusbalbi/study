
function Connection (pInfo = {}) {
  this.info = Object.assign(pInfo, {})
}

Connection.prototype.getConnection = () => {
  return this.info
}
module.exports = Connection
