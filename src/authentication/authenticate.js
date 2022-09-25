const authenticateDevice = require('../requests/authenticateDevice')

const authenticate = async (client, username, password, callback) => {
  try {
    const response = await authenticateDevice(username)

    client.topic_id = response.data.topic_id
    callback(null, true)
  } catch (e) {
    let error = new Error("Couldn't authorize device")
    callback(error, null)
  }
};

module.exports = authenticate;
