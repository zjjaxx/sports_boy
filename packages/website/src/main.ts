import { createApp } from 'vue'
import App from './App.vue'
import { ZRow, ZCol } from 'sports_boy'
const app=createApp(App)
app.component("ZRow",ZRow)
app.component("ZCol",ZCol)
app.mount('#app')
