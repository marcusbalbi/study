'use strict'
process.env.NODE_ENV = 'test'

global.chai = require('chai')
global.expect = global.chai.expect
let chaiHttp = require('chai-http')
global.server = require('../app')
global.chai.use(chaiHttp)
