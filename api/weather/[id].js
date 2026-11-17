const weatherHandler = require('./weather.js');

module.exports = (req, res) => {
  return weatherHandler(req, res);
};
