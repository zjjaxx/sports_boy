import {ZRow} from "@/components/layout/zrow/index"
import {ZCol} from "@/components/layout/zcol/index"
import {ZContainer} from "@/components/layout/z-container/index"
import { ZHeader } from "@/components/layout/z-header"
import { ZAside } from "@/components/layout/z-aside"
import { ZMain } from "@/components/layout/z-main"
import { ZFooter } from "@/components/layout/z-footer"
import { App } from "vue"
let elementList={
  ZRow,
  ZCol,
  ZContainer,
  ZHeader,
  ZAside,
  ZMain,
  ZFooter
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
  ZCol,
  ZContainer,
  ZHeader,
  ZAside,
  ZMain,
  ZFooter
}


