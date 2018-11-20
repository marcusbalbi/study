let loginInfo = null
module.exports = class User {
  static getLoginInfo () {
    return loginInfo
  }
  static setLoginInfo (pLoginInfo) {
    loginInfo = pLoginInfo
  }
}
