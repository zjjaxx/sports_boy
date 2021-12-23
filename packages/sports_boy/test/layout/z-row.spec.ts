import {mount} from "@vue/test-utils"
import ZCol from "../../src/components/layout/z-col/z-col.vue"
describe("ZCol",()=>{
    test("ZCol 存在",()=>{
        expect(ZCol).not.toBeNull()
    })
    test("ZCol span offset 属性",()=>{
        const wrapper=mount(ZCol,{
            props:{
                span:12,
                offset:9
            }
        })
        const styleList=wrapper.attributes("style").split(";")
        const marginLeft="margin-left"
        const width="width"
        const marginLeftValue=styleList.find(item=>item.includes(marginLeft))?.split(":")[1].trim()
        const widthValue=styleList.find(item=>item.includes(width))?.split(":")[1].trim()
        expect(marginLeftValue).toEqual("37.5%")
        expect(widthValue).toEqual("50%")
    })
})
