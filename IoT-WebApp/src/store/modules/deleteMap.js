import BackEndApi from '../../services/api/backEnd';

const actions = {
  delmap(credentials, map) {
    return new Promise((resolve, reject) => {
      BackEndApi.deleteCalls('/fields/' + map)
        .then(response => {
          console.log(response)
          resolve(response)
        })
        .catch(error => {
          // eslint-disable-next-line no-undef
          reject(response)
          console.log(error)
        })
    })
  }
};

export default {
  actions
}
