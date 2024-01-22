import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import './assets/scss/styles.scss'

createApp(App).use(store).use(store).use(router).mount('#app')
