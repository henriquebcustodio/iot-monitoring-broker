const authorizePublish = (client, packet, callback) => {
  const allowedTopic = `/devices/${client.topic_id}`

  if (packet.topic !== allowedTopic) {
    const error = new Error(`This device can only publish to ${allowedTopic}`)
    return callback(error)
  }

  callback(null);
};

module.exports = authorizePublish;
