import {mount} from "@vue/test-utils"
import ZCol from "@/components/layout/z-col/z-col.vue"
describe("ZCol",()=>{
    test("ZCol span offset gutter 属性",()=>{
        const wrapper=mount(ZCol,{
            global:{
                provide:{
                    gutter:12
                }
            },
            props:{
                span:12,
                offset:9
            }
        })
        const styleList=wrapper.attributes("style").split(";")
        const marginLeft="margin-left"
        const width="width"
        const paddingLeft="padding-left"
        const paddingRight="padding-right"
        const marginLeftValue=styleList.find(item=>item.includes(marginLeft))?.split(":")[1].trim()
        const widthValue=styleList.find(item=>item.includes(width))?.split(":")[1].trim()
        const paddingLeftValue=styleList.find(item=>item.includes(paddingLeft))?.split(":")[1].trim()
        const paddingRightValue=styleList.find(item=>item.includes(paddingRight))?.split(":")[1].trim()
        expect(marginLeftValue).toEqual("37.5%")
        expect(widthValue).toEqual("50%")
        expect(paddingLeftValue).toEqual("6px")
        expect(paddingRightValue).toEqual("6px")
    })
})
