import Vue from "vue";
import VueRouter from "vue-router";
import all from "../views/all.vue";
import active from "../views/active.vue";
import complete from "../views/complete.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/all",
    name: "all",
    component: all
  },

  {
    path: "/active",
    name: "active",
    component: active
  },

  {
    path: "/complete",
    name: "complete",
    component: complete
  },
  //如果都不是就直接到all
  {
    path: "*",
    redirect: "/all"
  }
  // {
  //   path: "/active",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     // import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  routes
});

export default router;
