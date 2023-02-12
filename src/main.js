import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import getVant from '../public/plugins/index.js'

const app = createApp(App)
getVant(app)

app.use(store)
app.use(router).mount('#app')
