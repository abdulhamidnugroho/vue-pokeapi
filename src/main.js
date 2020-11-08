import Vue from "vue";
import App from "./App.vue";
import Router from "vue-router";
import {
  Quasar,
  LocalStorage,
  SessionStorage
} from 'quasar'

Vue.use(Quasar, {
  plugins: {
    LocalStorage,
    SessionStorage
  }
})

Vue.use(Router);

import API from "./services/api";
Vue.use(API);

import router from "@/router";

import store from './store';

Vue.config.productionTip = false;

import "./main.css";
import vuetify from "./plugins/vuetify";

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
