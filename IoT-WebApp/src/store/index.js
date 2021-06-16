import Vue from 'vue';
import Vuex from 'vuex';

import account from './modules/account';
import deleteField from './modules/deleteField';
import createField from './modules/createField';
import createChart from './modules/createChart';
import createMap from './modules/createMap';
import deleteMap from './modules/deleteMap';
import setDeviceID from './modules/setDeviceID';
import deleteUser from './modules/deleteUser';
import setFieldID from './modules/setFields';
import setSupervisedUser from './modules/superVisorInfo';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    account,
    createField,
    deleteField,
    createChart,
    createMap,
    deleteMap,
    setDeviceID,
    deleteUser,
    setFieldID,
    setSupervisedUser
  }
});
