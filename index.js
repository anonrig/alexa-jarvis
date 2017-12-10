const server = require('alexa-app-server');

server.start({
  port: process.env.port || 8080
});
