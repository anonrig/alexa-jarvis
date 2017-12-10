const lgtv = require('lgtv2');
const wol = require('node-wol');

class TV {
  constructor(timeout = 5) {
    this.timeout = timeout;
    this.ip = null;
    this.isConnected = false;
    this.lgtv = lgtv({
      url: process.env.LGTV_URL || 'ws://192.168.1.31:3000'
    });
    this.bindEvents();
  }

  bindEvents() {
    this.lgtv.on('connecting', () => {});

    this.lgtv.on('connect', () => {});

    this.lgtv.on('error', (error) => {
      // console.error('Error', error);
    });
  }

  async turnOff() {
    console.log('Turning off');
    return new Promise((resolve, reject) => {
      this.lgtv.request('ssap://system/turnOff', (err) => {
        if (err) return reject(err);
        resolve();
      });
    });
  }

  async turnOn() {
    console.log('Turning on');
    return new Promise((resolve, reject) => {
      wol.wake('E8:F2:E2:C6:58:70', {
        address: '192.168.1.31',
        port: 3000
      }, (error) => {
        if (error) return reject(error);
        resolve();
      });
    });
  }
}

module.exports = TV;
