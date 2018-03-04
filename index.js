let Extension = require('@iotame/api').Extension

module.exports = class extends Extension {
  devices () {
    return {
      light: require('./devices/Light'),
      thermostat: require('./devices/Thermostat')
    }
  }

  channels () {
    return {
      bluetooth: require('./channels/Bluetooth')
    }
  }

  protocols () {
    return {
      'lights.yeelight': require('./protocols/lights/Yeelight'),
      'thermostats.eq3': require('./protocols/thermostats/eQ-3'),
      'thermostats.nest': require('./protocols/thermostats/Nest')
    }
  }

  hooks () {
    return []
  }
}
