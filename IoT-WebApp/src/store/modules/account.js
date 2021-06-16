import BackEndApi from '../../services/api/backEnd';

const state = {
  token: localStorage.getItem('access_token') || null,
  role: localStorage.getItem('UserRole'),
  admin_id: localStorage.getItem('admin_id')
};

const getters = { 
  loggedIn(state) {
    return state.token != null
  },
  getUserRole(state) {
    return state.role;
  },
  get_my_ID(state) {
    return state.admin_id;
  }
};

const mutations = {
  retrieveToken(state, token) {
    state.token = token
  },
  deleteToken(state) {
    state.token = null
  },
  setUserRole(state, userRole) {
    state.role = userRole;
  },
  set_admin_id(state,admin_id) {
    state.admin_id = admin_id;
  }
};

const actions = {
  retrieveToken(context, credentials) {
    return new Promise((resolve, reject) => {
      BackEndApi.postCalls('/auth/login', {
        email: credentials.email,
        password: credentials.password
      })
        .then(response => {
          const token = response.data.token
          const user_role = response.data.user.role
          //store the role
          localStorage.setItem('UserRole', user_role);
          context.commit('setUserRole', response.data.user.role);
          //store the token
          localStorage.setItem('access_token', token)
          context.commit('retrieveToken', token)
          resolve(response);
        })
        .catch(response => {
          reject(response);
        })
    })
  },
  setAdminID(context, credentials) {
    // store admin id
    localStorage.setItem('admin_id', credentials.adminID);
    context.commit('set_admin_id', credentials.adminID);
  },
  deleteToken(context) {
    if (context.getters.loggedIn) {
      localStorage.removeItem('access_token')
      context.commit('deleteToken')
    }
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}
