import { createApp } from 'vue'
import { FirebaseApp } from 'firebase/app'
import App from './App.vue'
import router from './router'


createApp(App).use(router).mount('#app')
