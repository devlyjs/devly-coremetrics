const winston = require('winston');
const { ADD_COREMETRICS_CONFIG, ADD_COREMETRICS_COMMANDS } = require('../actions');
const yargs = require('@devly/devly-cli');
const Coremetrics = require('../scripts/coremetrics');
const coremetrics = new Coremetrics();
const initialState = {};
winston.cli();

function addCoremetricsConfig(state, config){
  return {...state, ...config};
}

function addCoremetricsCommands(state){
  yargs.middleware([coremetrics]);
  return state;
}

module.exports = function hostsReducer(state = initialState, action){
  switch (action.type) {
    case ADD_COREMETRICS_CONFIG:
      return addCoremetricsConfig(state, action.config);
    case ADD_COREMETRICS_COMMANDS:
      return addCoremetricsCommands(state);
    default:
      return state;
  }
}
