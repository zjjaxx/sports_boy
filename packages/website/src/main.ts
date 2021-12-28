import { createApp} from 'vue'
import App from './App.vue'
// import SportsBoy from 'sports_boy'
import "sports_boy/theme/index.css"
import {ZCol,ZRow,ZContainer,ZAside,ZMain,ZFooter,ZHeader} from 'sports_boy'

const app=createApp(App)
// app.use(SportsBoy)
app.use(ZRow).use(ZCol).use(ZContainer).use(ZAside).use(ZMain).use(ZFooter).use(ZHeader)
app.mount('#app')
