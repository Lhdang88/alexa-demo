'use strict';
const Alexa = require('alexa-sdk');
const resources = require('./resources/resources');
const dialectify = require('./lib/dialectify');

const handlers = {
    'LaunchRequest': function () {
        this.emit('AMAZON.HelpIntent');
    },
    'TellNewJoke': function (intent, session, response, more) {
        this.emit('GetJoke');
    },
    'GetJoke': function () {
        // Get a random space fact from the space facts list
        // Use this.t() to get corresponding language data
        let jokesArr = this.t('JOKES');
        let jokesIndex = Math.floor(Math.random() * jokesArr.length);
        console.log(this.event.request.intent.slots);
        const slots = ((this.event.request.intent.slots || {}).dialect || {}).value;
        let randomJoke = dialectify(slots, jokesArr[jokesIndex]);

        // Create speech output
        this.emit(':tellWithCard', randomJoke, this.t("SKILL_NAME"), randomJoke)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = this.t("HELP_MESSAGE");
        var reprompt = this.t("HELP_MESSAGE");
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t("STOP_MESSAGE"));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t("STOP_MESSAGE"));
    }
};

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = undefined; //'amzn1.ask.skill.1f0923be-0151-49b0-9c6e-6b238f9c9bc3';
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = resources;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
