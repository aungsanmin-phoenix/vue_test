import Vue from 'vue'
import App from './App.vue'
import HomeVue from"./Page/HomeVue"
import AboutVue from "./Page/AboutVue"
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes=[
  {
    path:"/",
    name:"home",
    component:HomeVue, 
   },
   {
   path:"/about",
    name:"about",
    component:AboutVue, 
   },
];

const router = new VueRouter({
  mode:"history",
  routes,
});


new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");



