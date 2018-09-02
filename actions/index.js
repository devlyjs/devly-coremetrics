// Use higher order reducers here

const ADD_COREMETRICS_CONFIG = 'ADD_COREMETRICS_CONFIG';
const ADD_COREMETRICS_COMMANDS = 'ADD_COREMETRICS_COMMANDS';

function addCoremetricsConfig (config) {
  //console.log('config action fired: ', config);
  return {
    type: ADD_COREMETRICS_CONFIG,
    config
  }
}

function addCoremetricsCommands (yargs) {
  console.log('action fired: ');
  return {
    type: ADD_COREMETRICS_COMMANDS,
    yargs
  }
}


module.exports = {
  addCoremetricsConfig,
  addCoremetricsCommands,
  ADD_COREMETRICS_CONFIG,
  ADD_COREMETRICS_COMMANDS
}
