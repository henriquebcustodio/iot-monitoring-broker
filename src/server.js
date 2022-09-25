const net = require('net');

class Server {
  constructor(listener) {
    this.server = net.createServer(listener);
  }

  listen(port = 1883) {
    this.server.listen(port, function () {
      console.log('server started and listening on port ', port);
    });
  }
}

module.exports = Server;
