let Extension = require('@iotame/api').Extension

module.exports = class extends Extension {
  devices () {
    return {}
  }

  channels () {
    return {
      bluetooth: require('./channels/Bluetooth')
    }
  }

  protocols () {
    return {}
  }
}

