const Protocol = require('@iotame/api').Protocol

module.exports = class Yeelight extends Protocol {
  static supportedDevices () {
    return ['@iotame/builtins:devices.light']
  }
}
