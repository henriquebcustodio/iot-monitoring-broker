const api = require('./api')

const authenticateDevice = (device_token) => {
  return api.post('/broker/devices/authenticate', {
    device: {
      token: device_token
    },
  });
};

module.exports = authenticateDevice