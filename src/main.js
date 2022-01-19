import { createApp } from 'vue'
import store from './store.js'

import App from './App.vue'

const app = createApp(App).use(store).mount('#app');
