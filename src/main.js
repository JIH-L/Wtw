import { createApp } from 'vue';
import router from './router'
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueLazyLoad from "vue3-lazyload";

// import "@/assets/scss/variables.scss";
import "normalize.css/normalize.css";


// createApp(App).use(VueAxios, axios, VueLazyLoad).mount("#app");
const app = createApp(App).use(router);
app.use(VueAxios, axios);
app.use(VueLazyLoad, {
  loading: "",
  error: "",
  lifecycle: {
    // loading: (el) => {
    //   console.log("loading", el);
    // },
    // error: (el) => {
    //   console.log("error", el);
    // },
    // loaded: (el) => {
    //   console.log("loaded", el);
    // },
  },
});
app.mount("#app");