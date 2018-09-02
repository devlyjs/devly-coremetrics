const axios = require('axios');

module.exports = function coremetrics(data) {
  const { url } = store.getState().coremetrics;
  const parsedData = {
    command: data._.toString()
  };
  axios({
    method: 'post',
    url,
    data: Object.assign({}, parsedData),
  }).then(result => result).catch(error => error);
};
