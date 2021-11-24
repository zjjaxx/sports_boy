import HelloWorld from "@/components/HelloWorld.vue"
type a=number
const fn=()=>new Promise<a>((resolve,reject)=>{
    resolve(10000)
    console.log("test 10")
  })
export {
  fn,
  HelloWorld
} 


