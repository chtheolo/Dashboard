import BackEndApi from '../../services/api/backEnd';

const state = {
  airtemp: false,
  airhumid: false,
  leafwet: false,
  photoraw: false,
  soiltemp: false,
  watermark: false,
  solarRadiation: false,
  optionStateAirtemp: '',
  optionStateAirHumid: '',
  optionStateLeafWet: '',
  optionStatePhotoRaw: '',
  optionStateSoilTemp: '',
  optionStateWatermark: '',
  optionStateSolarRadiation: '',
  optionStateGaugeAirHumid: 'MEAN',
  optionStateGaugeAirTemp: 'MEAN',
  optionStateGaugeWindSpeed: 'MEAN',
  optionStateGaugeSoilTemp: 'MEAN',
  optionStateColAirSoilTemp: 'MEAN',
};

const getters = {
  airtempState(state) {
    return state.airtemp
  },
  airhumidState(state) {
    return state.airhumid
  },
  leafwetState(state) {
    return state.leafwet
  },
  watermarkState(state) {
    return state.watermark
  },
  soiltempState(state) {
    return state.soiltemp
  },
  photorawState(state) {
    return state.photoraw
  },
  OptionAirTemp(state) {
    return state.optionStateAirtemp
  },
  OptionAirHumid(state) {
    return state.optionStateAirHumid
  },
  OptionSoilTemp(state) {
    return state.optionStateSoilTemp
  },
  OptionWatermark(state) {
    return state.optionStateWatermark
  },
  OptionPhotoraw(state) {
    return state.optionStatePhotoRaw
  },
  OptionLeafWet(state) {
    return state.optionStateLeafWet
  },
  OptionSolarRadiation(state) {
    return state.optionStateSolarRadiation;
  },
  OptionGaugeAirHumid(state) {
    return state.optionStateGaugeAirHumid
  },
  OptionGaugeWindSpeed(state) {
    return state.optionStateGaugeWindSpeed
  },
  OptionGaugeAirTemp(state) {
    return state.optionStateGaugeAirTemp
  },
  OptionGaugeSoilTemp(state) {
    return state.optionStateGaugeSoilTemp
  },
  OptionColAirSoilTemp(state) {
    return state.optionStateColAirSoilTemp
  }
};

const mutations = {
  setChart(state, attribute) {
    switch (attribute) {
      case "Air Temperature":
        state.airtemp = true;
        break;
      case "Air Humidity":
        state.airhumid = true;
        break;
      case "LeafWet":
        state.leafwet = true;
        break;
      case "Soil Temperature":
        state.soiltemp = true;
        break;
      case "Watermark":
        state.watermark = true;
        break;
      case "PhotoRaw":
        state.photoraw = true;
        break;
    }
  },
  setOption(state, option) {
    switch (option.chart) {
      case "AIRTEMP":
        state.optionStateAirtemp = option.d;
        break;
      case "AIRHUMID":
        state.optionStateAirHumid = option.d;
        break;
      case "SOILTEMP":
        state.optionStateSoilTemp = option.d;
        break;
      case "WATERMARK":
        state.optionStateWatermark = option.d;
        break;
      case "LEAFWET":
        state.optionStateLeafWet = option.d;
        break;
      case "PHOTORAW":
        state.optionStatePhotoRaw = option.d;
        break;
      case "SOLARRADIATION":
        state.optionStatePhotoRaw = option.d;
        break;
      case "GAUGE_AIRHUMID":
        state.optionStateGaugeAirHumid = option.d;
        break;
      case "GAUGE_AIRTEMP":
        state.optionStateGaugeAirTemp = option.d;
        break;
      case "GAUGE_WINDSPEED":
        state.optionStateGaugeWindSpeed = option.d;
        break;
      case "GAUGE_SOILTEMP":
        state.optionStateGaugeSoilTemp = option.d;
        break;
      case "COLUMN_CHART":
        state.optionStateColAirSoilTemp = option.d;
        break;
    }
  }
};

const actions = {
  createChart(context, credentials) {
    return new Promise((resolve, reject) => {
      BackEndApi.postCalls('/charts', {
        attribute: credentials.attribute,
        type: credentials.type
      })
        .then(response => {
          context.commit('setChart', credentials.attribute);
          resolve(response)
        })
        .catch(error => {
          console.log(error)
          // eslint-disable-next-line no-undef
          reject(response)
        })
    })
  },
  doOption(context, choice) {
    context.commit('setOption', choice);
  }
};

export default {
  actions,
  state,
  getters,
  mutations
}
