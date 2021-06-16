import BackEndApi from '../../services/api/backEnd';

const actions = {
  delField(credentials, field) {
    return new Promise((resolve, reject) => {
      BackEndApi.deleteCalls('/fields/' + field._id)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          // eslint-disable-next-line no-undef
          reject(response);
          console.log(error);
        })
    })
  }
};

export default {
  actions
}
