import { App,Component,Plugin} from 'vue'
export const addInstallPrototype=(component:Component,componnentName:string)=>{
    component['install']=(Vue:App)=>{
        Vue.component(componnentName,component)
    }
    return component as Plugin
}