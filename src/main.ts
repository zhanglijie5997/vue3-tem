import { createApp } from 'vue';

import App from './App.vue';

import router from './router/router';

import store from "./store/store";

// @ts-ignore
const app = createApp(App);

app.use(router).use(store);

app.mount('#app');
