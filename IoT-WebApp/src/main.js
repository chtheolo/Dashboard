// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// import 'aos/dist/aos.css'
// import * as VueGoogleMaps from 'vue2-google-maps'
import VueToastify from "vue-toastify";
import VueTelInput from 'vue-tel-input'
import VueI18n from 'vue-i18n';
import messages from './lang';

import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

import Vuetify from 'vuetify'
import "vue-notifyjs/themes/default.css";

Vue.use(VueTelInput)

Vue.use(VueToastify, {
  errorDuration: 2000,
  warningInfoDuration: 1500,
  successDuration: 1500,
  singular: false,
  position: "bottom-center"
});

Vue.config.productionTip = false

Vue.use(Vuetify)

Vue.use(VueI18n);
export const i18n = new VueI18n({
  locale: 'el',
  fallbackLocale: 'el',
  messages
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.loggedIn) {
      next({
        path: '/' + i18n.locale
      })
    }
    else {
      next()
    }
  }
  else if (to.matched.some(record => record.meta.requiresVisitor)) {
    // this route does not requires auth, check if it is free visitor
    // if not, redirect to login page.
    if (store.getters.loggedIn) {
      next({
        path: '/'
      })
    }
    else {
      next()
    }
  }
  else {
    next() // make sure to always call next()!
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  created() {
  },
  router,
  store,
  i18n,
  template: '<App/>',
})
