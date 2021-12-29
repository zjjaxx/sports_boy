
/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'

import {ZCol,ZRow,ZContainer,ZAside,ZMain,ZFooter,ZHeader} from 'sports_boy'

Vue.config.productionTip = false

const app=new Vue({
  render: h => h(App),
})

app.use(ZRow).use(ZCol).use(ZContainer).use(ZAside).use(ZMain).use(ZFooter).use(ZHeader)

app.$mount('#app')
