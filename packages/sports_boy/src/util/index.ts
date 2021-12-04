import { App,ComponentCustomOptions,Plugin,VNode,DefineComponent} from 'vue'
interface CustomComponent extends ComponentCustomOptions{
    name?:string
}
export const addInstallPrototype=(component:CustomComponent,componnentName:string)=>{
    component['install']=(Vue:App)=>{
        Vue.component(componnentName,component)
    }
    component.name=componnentName
    return component as Plugin
}
//匹配子组件名
export const matchChildComponentName=(childrenVnodes:VNode[]|undefined,componentNames:Array<String>)=>{
    if(!childrenVnodes){
        return false
    }
    const item= childrenVnodes.find(vnode=>{
        if(vnode.type&&(vnode.type as CustomComponent).name){
           return componentNames.includes((vnode.type as CustomComponent).name!)
        }
        else{
            return false
        }
    })
    return item?true:false
}