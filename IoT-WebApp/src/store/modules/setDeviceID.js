const state = {
  agro_device_id: localStorage.getItem('agro_deviceID'),
  agro_node_id: JSON.parse(localStorage.getItem('agro_nodeID')),
  meteo_device_id: localStorage.getItem('meteo_deviceID'),
  meteo_node_id: JSON.parse(localStorage.getItem('meteo_nodeID')),
  db_project: localStorage.getItem('db_project'),
  crop: localStorage.getItem('crop')
};

const getters = {
  getAgroDeviceID(state) {
    return state.agro_device_id;
  },
  getAgroNodeID(state) {
    return state.agro_node_id;
  },
  getMeteoDeviceID(state) {
    return state.meteo_device_id;
  },
  getMeteoNodeID(state) {
    return state.meteo_node_id;
  },
  get_db_project(state) {
    return state.db_project;
  },
  get_crop(state) {
    return state.crop;
  }
};

const mutations = {
  set_AgroDeviceID(state, attribute) {
    state.agro_device_id = attribute;
  },
  set_AgroNodeID(state, attribute) {
    state.agro_node_id = attribute;
  },
  set_MeteoDeviceID(state, attribute) {
    state.meteo_device_id = attribute;
  },
  set_MeteoNodeID(state, attribute) {
    state.meteo_node_id = attribute;
  },
  set_db_project(state, db_project) {
    state.db_project = db_project;
  },
  set_crop(state, crop) {
    state.crop = crop;
  }
};

const actions = {
  setDeviceNode(context, credentials) {
    //set agro_DeviceID
    localStorage.setItem('agro_deviceID', credentials.agro_device_id);
    context.commit('set_AgroDeviceID', credentials.agro_device_id);
    //set agro_NodeID
    localStorage.setItem('agro_nodeID', JSON.stringify(credentials.agro_node_id));
    context.commit('set_AgroNodeID', credentials.agro_node_id);
    //set meteo_DeviceID
    localStorage.setItem('meteo_deviceID', credentials.meteo_device_id);
    context.commit('set_MeteoDeviceID', credentials.meteo_device_id);
    //set meteo_NodeID
    localStorage.setItem('meteo_nodeID', JSON.stringify(credentials.meteo_node_id));
    context.commit('set_MeteoNodeID', credentials.meteo_node_id);
    //store the the project_db
    localStorage.setItem('db_project', credentials.db_project);
    context.commit('set_db_project', credentials.db_project);
    //store the the project_db
    localStorage.setItem('crop', credentials.crop);
    context.commit('set_crop', credentials.crop);
  }
};

export default {
  actions,
  state,
  getters,
  mutations
}
