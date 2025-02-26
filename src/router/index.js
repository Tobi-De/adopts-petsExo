import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Pet from "../views/Pet.vue";
import Dogs from "../views/Dogs.vue";
import Cats from "../views/Cats.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/cats",
    name: "Cats",
    component: Cats
  },
  {
    path: "/dogs",
    name: "Dogs",
    component: Dogs
  },
  {
    path: "/pets/:species/:id",
    name: "Pet",
    component: Pet
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
