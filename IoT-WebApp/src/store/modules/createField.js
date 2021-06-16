import BackEndApi from '../../services/api/backEnd';

const actions = {
  createField(context, credentials) {
    return new Promise((resolve, reject) => {
      BackEndApi.postCalls('/fields', {
        crop: credentials.crop,
        variety: credentials.variety,
        size: credentials.size
      })
        .then(response => {
          resolve(response)
          console.log(response)
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
