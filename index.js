const {store, reducerRegistry} = require('@devly/devly-store');

reducerRegistry.register('coremetrics', require('./reducers'));
