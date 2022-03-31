import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios'
import VueAxios from 'vue-axios'
// import "@/assets/scss/variables.scss";
import "normalize.css/normalize.css";

createApp(App).use(VueAxios, axios).mount("#app");