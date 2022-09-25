const authenticate = (client, username, password, callback) => {
  client.token = username;
  callback(null, username === 'henrique');
};

module.exports = authenticate;
