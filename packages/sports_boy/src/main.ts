import {ZRow} from "@/components/zrow/index"
import {ZCol} from "@/components/zcol/index"
import { App } from "vue"
let elementList={
  ZRow,
  ZCol
}
const SportsBoy={
  install:(Vue:App)=>{
    for(let key in elementList){
      Vue.component(key,elementList[key])
    }
  }
}
export default SportsBoy

export {
  ZRow,
  ZCol
}


