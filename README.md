# Introduction

Coremetrics plugin for `@devly`.

# Installation

To add devly-coremetrics plugin to your project, first make sure your project is set-up to consume Devly plugins (see https://github.com/aorinevo/devly-example#introduction).

Next, install `@devly/devly-coremetrics`:

```bash
npm i @devly/devly-coremetrics
```

# Integration

Use `addCoremetricsConfig` action creator to update the hosts state in the devly-store.  It is recommneded to place the initialState for hosts in a `manifests/hosts.js` file and requiring that file within the file that dispatches the action.

```js
// mainfests/hosts.js
const ORIGIN = 'https://my-api.origin.com';
const PATH = '/api/v1/coremtrics';
const URL = `${ORIGIN}${PATH}`;

module.exports = {
  origin: ORIGIN,
  path: PATH,
  url: URL
};
```

It is recommended that the consumer create a `plugins/index.js` barrel file for the devly plugins it consumes.

```js
// plugins/index.js

require('./coremetrics.js');

// plugins/hosts.js
const {store} = require('@devly/devly-store');
const {addCoremetricsConfig, addCoremetricsCommands} = require('@devly/devly-coremetrics/actions');
const {dispatch} = store;

require('@devly/devly-coremetrics');

dispatch(addCoremetricsConfig(require('./manifests/coremetrics')));

dispatch(addCoremetricsCommands());
```

# Technical Details

All devly plugins assume that the consumer has the following directory structure somewhere in their working directory:
```
 ├── cli.js
 ├── actions
    └── index.js
 ├── reducers
    └── index.js
 └── index.js
```

Dynamically add reducers to the store using devly's `reducerRegistry` method.
```js
const {store, reducerRegistry} = require('@devly/devly-store');

reducerRegistry.register('hosts', require('./reducers'));
```

Actions and reducers are the same actions and reducers from redux.  For more information on either, visit
 - https://redux.js.org/basics/actions, and
 - https://redux.js.org/basics/actions.

`cli.js`

```js
const store = require('../scripts/reapps/store');
const yargs = require('yargs');
const {addCoremetricsConfig, addCoremetricsCommands} = require('@devly/devly-hosts/actions');
const Coremetrics = require('@devly/devly-hosts/scripts/hosts');

store.dispatch(addCoremetricsConfig(require('../manifests/hosts')));
store.dispatch(addCoremetricsCommands(yargs, new Coremetrics(store)));

module.exports = yargs;
```
