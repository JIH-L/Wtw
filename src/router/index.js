import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MovieView from "../views/MovieView.vue";
import MovieDetail from "../views/MovieDetail.vue";
import TvView from "../views/TvView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/movie",
    name: "movie",
    component: MovieView,
  },
  {
    path: "/movie/:movieId",
    name: "movieDetail",
    component: MovieDetail,
  },
  {
    path: "/tv",
    name: "tv",
    component: TvView,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
