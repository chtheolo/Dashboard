import BackEndApi from '../../services/api/backEnd';

const actions = {
  delUser(credentials, userID) {
    return new Promise((resolve, reject) => {
      BackEndApi.deleteCalls('/users/' + userID)
        .then(response => {
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
