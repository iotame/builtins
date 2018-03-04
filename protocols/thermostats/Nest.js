const Protocol = require('@iotame/api').Protocol

module.exports = class Nest extends Protocol {
  static supportedDevices () {
    return ['@iotame/builtins:devices.thermostat']
  }
}
