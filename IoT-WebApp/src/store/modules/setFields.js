const state = {
  field_ID: localStorage.getItem('field_id')
};
const getters = {
  getField_id(state) {
    return state.field_ID;
  }
};
const mutations = {
  set_FieldID(state, attribute) {
    state.field_ID = attribute;
  }
};
const actions = {
  setFieldID(context, credentials) {
    localStorage.setItem('field_id', credentials.field_id);
    context.commit('set_FieldID', credentials.field_id);
  }
};

export default {
  actions,
  state,
  getters,
  mutations
}
