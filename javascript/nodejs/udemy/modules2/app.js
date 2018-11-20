const greet = require('./greet1')
const greet2 = require('./greet2').greet
const greet3 = require('./greet3')
const greet4 = require('./greet')
const greet5 = require('./greet')
greet()
greet2()
greet3.greet()

greet4.greet()
greet4.name = "HELLLLL"
greet5.greet()
