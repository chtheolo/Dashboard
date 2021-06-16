import Vue from 'vue'
import Router from 'vue-router'
import DashBoard from '@/components/Dashboard'
import RouterView from '@/components/RouterView'
import { i18n } from "@/main.js"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/:lang",
      component: RouterView,
      beforeEnter(to, from, next) {
        const lang = to.params.lang;
        if (!["en", "el"].includes(lang)) return next("en");
        if (i18n.locale !== lang) {
          i18n.locale = lang;
        }
        return next();
      },
      children: [
        {
          path: '/',
          name: 'dashboard',
          component: DashBoard 
        },
      ]
    },
    {
      path: "*",
      redirect: to => {
        return { path: "/en" }
      }
    }
  ],
  //mode: 'history'
})
