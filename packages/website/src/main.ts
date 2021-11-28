import { createApp} from 'vue'
import App from './App.vue'
// import SportsBoy from 'sports_boy'
// import "sports_boy/theme/index.css"
import {ZCol,ZRow} from 'sports_boy'

const app=createApp(App)
app.use(ZRow).use(ZCol)
app.mount('#app')
