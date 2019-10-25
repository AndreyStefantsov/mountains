import Vue from 'vue';
import App from './App.vue'
import VueRouter from 'vue-router'

import sectionSkills from './components/section-skills.vue'
import sectionProjects from './components/section-projects.vue'

Vue.use(VueRouter);

const routes = [
    {
      path: '/skills',
      component: () => import("./components/section-skills.vue")
    },
    {
      path: '/projects',
      component: () => import("./components/section-projects.vue")
    }
  ]

const router = new VueRouter({routes});

export default router;

import "./styles/main.pcss";

new Vue({
  el: "#app-root",
  router,
  render: h => h(App)
});