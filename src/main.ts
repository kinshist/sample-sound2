import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import './assets/css/reset.scss';
import './assets/css/style.scss';

const app = createApp(App);
app.use(router).use(createPinia());
app.mount('#app');
