const chai = require('chai');
const BrowserHelpers = require('e2e_training_wheels')
global.browser = new BrowserHelpers()
global.expect = chai.expect;
global.Player = require('./src/js/player')
global.Game = require('./src/js/game')