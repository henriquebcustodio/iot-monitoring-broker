const authorizeSubscribe = (client, sub, callback) => {
  const allowedTopic = `/devices/${client.topic_id}`

  if (sub.topic !== allowedTopic) {
    const error = new Error(`This device can only subscribe to ${allowedTopic}`)
    return callback(error)
  }

  callback(null, sub);
};

module.exports = authorizeSubscribe;
