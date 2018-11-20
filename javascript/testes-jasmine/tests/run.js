// JASMINE_CONFIG_PATH=spec/config/jasmine.json jasmine
//
// jasmine JASMINE_CONFIG_PATH=spec/config/jasmine.json
//
// jasmine --no-color
//
// jasmine --filter="a spec name"
//
// jasmine --stop-on-failure=true

var Jasmine = require('jasmine');
var jasmine = new Jasmine();

// jasmine.loadConfigFile('spec/support/jasmine.json');

jasmine.loadConfig({
    spec_dir: 'tests',
    spec_files: [
        '**/*[sS]pec.js'
    ],
    helpers: [
        'helpers/**/*.js'
    ]
});

// jasmine.specDone(function (a,b,c) {
//   console.log(a,b,c);
// });
jasmine.onComplete(function(passed) {
    if(passed) {
        console.log('All specs have passed');
    }
    else {
        console.log('At least one spec has failed');
    }
});

// jasmine.configureDefaultReporter({
//     timer: new this.jasmine.Timer(),
//     print: function() {
//         process.stdout.write(util.format.apply(this, arguments));
//     },
//     showColors: true,
//     jasmineCorePath: this.jasmineCorePath
// });
//
// var CustomReporter = require('./myCustomReporter');
// var customReporter = new CustomReporter();
//
// jasmine.addReporter(customReporter);

jasmine.execute();

// jasmine.execute(['fooSpec.js'], 'a spec name');
//
// var Jasmine = require('jasmine');
// var jasmine = new Jasmine();
//
// jasmine.loadConfigFile('spec/support/jasmine.json');
// jasmine.configureDefaultReporter({
//     showColors: false
// });
// jasmine.execute();
