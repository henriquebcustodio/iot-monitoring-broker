require('dotenv').config()

const aedes = require('aedes')();
const net = require('net');
const { authenticate } = require('./authentication');
const { authorizePublish, authorizeSubscribe } = require('./authorization');

aedes.authenticate = authenticate;
aedes.authorizePublish = authorizePublish;
aedes.authorizeSubscribe = authorizeSubscribe;

net.createServer(aedes.handle).listen(process.env.PORT || 1883, () => {
  console.log('server started and listening on port', process.env.PORT || 1883);
})
