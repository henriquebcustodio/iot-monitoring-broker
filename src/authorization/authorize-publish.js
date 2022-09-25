const authorizePublish = (client, packet, callback) => {
  const pattern = new RegExp(`\/devices\/${client.topic_id}`)
  const match = packet.topic.match(pattern)

  if (!match) {
    const error = new Error(`This device can only publish to /devices/${client.topic_id}`)
    return callback(error)
  }

  callback(null);
};

module.exports = authorizePublish;
