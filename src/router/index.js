import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../features/home/HomeView.vue";
import UserView from "../features/user/UserView.vue";
import PhotoView from "../features/photo/PhotoView.vue";
import NotFound from "../components/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomeView,
  },
  {
    path: "/photos/:pathAlias",
    name: "UserPage",
    component: UserView,
    props: true,
  },
  {
    path: "/photos/:pathAlias/:photoId",
    name: "PhotoPage",
    component: PhotoView,
    props: true,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../features/about/AboutView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
