const server = require('alexa-app-server');

server.start({
  server_root: __dirname,
  port: process.env.port || 8080
});
