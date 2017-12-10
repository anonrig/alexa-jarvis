require('dotenv').config()

const Alexa = require('alexa-app');
const TV = require('./tv');

const Apsiyon = require('./apsiyon');
const Skill = new Alexa.app(process.env.ALEXA_APP || 'jarvis');
const webos = new TV();

Skill
  .intent('turnon', {
    'utterances': ['ask jarvis to turn on tv']
  }, (req, res) => {
    res.say('Turning on tv');
    return webos
      .turnOn()
      .catch(() => res.say('Failed to turn on tv'));
  });

Skill
  .intent('turnoff', {
    utterances: ['ask jarvis to turn off tv']
  }, (req, res) => {
    res.say('Turning off tv');
    return webos
      .turnOff()
      .catch(() => res.say('Failed to turn off tv'));
  });

Skill
  .intent('maintenancefee', {
    utterances: ['ask jarvis to learn my maintenance fee']
  }, (req, res) => {
    return Apsiyon
      .getMaintenanceFee()
      .then((fee) => {
        res.say(`Your maintenance fee is ${fee} Turkish Lira`).send();
      })
      .catch((error) => {
        res.say('Unable to get your maintenance fee');
      });
  });


// Enable hot reload.
module.change_code = 1;

module.exports = Skill;