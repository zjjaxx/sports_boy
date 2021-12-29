import {mount} from "@vue/test-utils"
import ZFooter from "@/components/layout/z-footer/z-footer.vue"

describe("ZFooter",()=>{
    test("ZFooter height属性",()=>{
        const wrapper=mount(ZFooter,{
            props:{
                height:200
            }
        })
        const styleList = wrapper.attributes("style").split(";")
        const height = "height"
        const heightValue = styleList.find(item => item.includes(height))?.split(":")[1].trim()
        expect(heightValue).toEqual("200px")
    })
})