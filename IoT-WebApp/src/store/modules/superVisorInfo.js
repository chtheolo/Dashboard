
const state = {
    UserSupervised: localStorage.getItem('user_supervised')
};

const getters = {
    getUserSupervised(state) {
        return state.UserSupervised;
    }
};

const mutations = {
  set_user_supervised(state, attribute) {
    state.UserSupervised = attribute;
  }
};

const actions = {
    setUserSupervised(context, credentials) {
        //set User supervised id
        localStorage.setItem('user_supervised', credentials.superVisedUser);
        context.commit('set_user_supervised', credentials.superVisedUser);
    }
};

export default {
  actions,
  state,
  getters,
  mutations
}