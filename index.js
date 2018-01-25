let Extension = require('@iotame/api').Extension
let Action = require('@iotame/api').Action

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

  hooks () {
    return [
      (new Action()).on('devicemanager.greeting').do(() => {
        console.log('Hi from builtins plugin') 
      })
    ]
  }
}

