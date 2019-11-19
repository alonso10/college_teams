import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import store from '@/store/index';

import App from './App.vue'
import CollegeList from '@/pages/ListColleges.vue';
import FavoriteList from '@/pages/ListFavorites.vue';

Vue.config.productionTip = false
Vue.config.devtools = process.env.NODE_ENV === 'development'
window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = App.constructor

Vue.use(BootstrapVue);
Vue.use(VueRouter);

const routes = [
  { path: '/', component: CollegeList },
  { path: '/favorites', component: FavoriteList }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
