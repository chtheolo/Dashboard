import BackEndApi from '../../services/api/backEnd';

const actions = {
  createMap(context, credentials) {
    return new Promise((resolve, reject) => {
      BackEndApi.postCalls('/fields', {
        financial_statements: credentials.financial_statements,
        planting_calendar: credentials.planting_calendar,
        yearly_production: credentials.yearly_production,
        crop_age: credentials.crop_age,
        variety: credentials.variety,
        polyetis: credentials.polyetis,
        numTrees: credentials.numTrees,
        size: credentials.size,
        name: credentials.name,
        crop: credentials.crop,
        overlay: credentials.overlay,
        methodos_ardeusis     : credentials.methodos_ardeusis,
        paragwgi              : credentials.paragwgi,
        piknotita_fiteusis    : credentials.piknotita_fiteusis,
        // epoxi_orimansis       : credentials.epoxi_orimansis,
        // ypokeimeno            : credentials.ypokeimeno, 
        // diamorfwsi            : credentials.diamorfwsi,
        // apostasis_fiteusis    : credentials.apostasis_fiteusis,
        // arithmos_stalaktirwn  : credentials.arithmos_stalaktirwn,
        // paroxi_stalaktira     : credentials.paroxi_stalaktira,
        // typos_edafous         : credentials.typos_edafous
        //description : credentials.description,
        //topography : credentials.topography,
        //equipment : credentials.equipment,
        //analysis : credentials.analysis,
        //staff : credentials.staff,
      })
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          console.log(error)
          // eslint-disable-next-line no-undef
          reject(response)
        })
    })
  }
};

export default {
  actions
}


