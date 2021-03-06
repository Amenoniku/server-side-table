import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/", redirect: "/home" },
    {
      path: "/home",
      name: "Home",
      component: () => import("@/views/Home")
    },
    {
      path: "/about",
      name: "About",
      component: () => import("@/views/About")
    }
  ]
});
