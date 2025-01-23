import { createApp } from 'vue';
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from './App.vue';
import router from './router';
import "./main.css";


createApp(App).use(router).mount('#app');
