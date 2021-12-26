import {mount} from "@vue/test-utils"
import ZContainer from "@/components/layout/z-container/z-container.vue"
import ZHeader from "@/components/layout/z-header/z-header.vue"
import ZFooter from "@/components/layout/z-footer/z-footer.vue"
ZHeader.name="ZHeader"
ZFooter.name="ZFooter"
describe("ZContainer",()=>{
    test("direction 属性 value=undefined section1",()=>{
        const wrapper=mount(ZContainer,{
            slots:{
                default:[
                    ZHeader,ZFooter
                ]
            }
        })
        expect(wrapper.find(".z-flex-column").exists()).toBe(true)
    })
    test("direction 属性 value=undefined section2",()=>{
        const wrapper=mount(ZContainer,{
            slots:{
                default:[
                    ZHeader
                ]
            }
        })
        expect(wrapper.find(".z-flex-column").exists()).toBe(true)
    })
    test("direction 属性 value=undefined section3",()=>{
        const wrapper=mount(ZContainer,{
            slots:{
                default:[
                    ZFooter
                ]
            }
        })
        expect(wrapper.find(".z-flex-column").exists()).toBe(true)
    })
    test("direction 属性 value=undefined section3",()=>{
        const wrapper=mount(ZContainer,{
            slots:{
                default:"<div>test</div>"
            }
        })
        expect(wrapper.find(".z-flex-column").exists()).toBe(false)
    })
    test("direction 属性 value=horizontal",()=>{
        const wrapper=mount(ZContainer,{
            props:{
                direction:"horizontal"
            }
        })
        expect(wrapper.find(".z-flex-column").exists()).toBe(false)
    })
    test("direction 属性 value=vertical",()=>{
        const wrapper=mount(ZContainer,{
            props:{
                direction:"vertical"
            }
        })
        expect(wrapper.find(".z-flex-column").exists()).toBe(true)
    })
})