const Alexa = require('alexa-app');
const TV = require('./tv');

const Skill = new Alexa.app(process.env.ALEXA_APP || 'jarvis');
const webos = new TV();

Skill
  .intent('turnon', {
    'utterances': ['ask jarvis to turn on tv']
  }, (req, res) => {
    res.say('Turning on tv');
    webos.turnOn();
  });

Skill
  .intent('turnoff', {
    utterances: ['ask jarvis to turn off tv']
  }, (req, res) => {
    res.say('Turning off tv');
    webos.turnOff();
  });


// Enable hot reload.
module.change_code = 1;

module.exports = Skill;