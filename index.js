require('dotenv').config()

const server = require('alexa-app-server');
const localtunnel = require('localtunnel');

const options = {
  subdomain: process.env.LOCALTUNNEL_SUBDOMAIN
};;

const tunnel = localtunnel(process.env.PORT, options, (error, {url}) => {
  if (error) {
    throw error;
  }

  console.log(`Tunnelling through ${url}`);

  server.start({
    port: process.env.port
  });
});

tunnel.on('close', () => {
  throw new Error('Tunnel closed');
});

