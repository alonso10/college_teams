import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'
import CollegeList from './pages/ListColleges.vue';

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(VueRouter);

const routes = [
  { path: '/', component: CollegeList }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
