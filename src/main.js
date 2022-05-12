import { createApp } from 'vue';
import router from './router'
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueLazyLoad from "vue3-lazyload";
import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
// import "@/assets/scss/variables.scss";
import "normalize.css/normalize.css";


// createApp(App).use(VueAxios, axios, VueLazyLoad).mount("#app");
const app = createApp(App).use(router);
app.use(VueAxios, axios);
app.use(VueLazyLoad, {
  loading: "",
  error: "",
  lifecycle: {},
});
app.use(VueLoading,{
  canCancel: true, // default false
  color: '#c10171',
  backgroundColor: '#1b1e25',
  loader: 'dots',
  opacity: 0.9,
  width: 64,
  height: 64,
});
router.afterEach(() => {
	window.scrollTo(0, 0);
});
app.mount("#app");