import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:svg-icons-register'
import gloalComponent from './components/index.ts'

const app = createApp(App)
app.use(gloalComponent);
app.mount('#app')


