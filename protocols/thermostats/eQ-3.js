const Protocol = require('@iotame/api').Protocol

module.exports = class eQ3 extends Protocol {
  static supportedDevices () {
    return ['@iotame/builtins:devices.thermostat']
  }

  static requiredConfiguration () {
    return [
      {
        name: 'mac',
        display: 'Mac Address',
        validation: 'mac'
      }
    ]
  }
}
