require('dotenv').config()

const Server = require('./Server');
const aedes = require('aedes')();
const { authenticate } = require('./authentication');
const { authorizePublish, authorizeSubscribe } = require('./authorization');

aedes.authenticate = authenticate;
aedes.authorizePublish = authorizePublish;
aedes.authorizeSubscribe = authorizeSubscribe;

new Server(aedes.handle).listen(1883);
