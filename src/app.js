require('dotenv').config()

const Server = require('./server');
const aedes = require('aedes')();
const { authenticate } = require('./authentication');
const { authorizePublish } = require('./authorization');

aedes.authenticate = authenticate;
aedes.authorizePublish = authorizePublish;

new Server(aedes.handle).listen(1883);
