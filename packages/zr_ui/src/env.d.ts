/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module 'zr_ui'{
  import { DefineComponent } from 'vue'
  const HelloWorld: DefineComponent<{}, {}, any>
  const fn:()=>Promise<number>
  export {
    fn,
    HelloWorld
  }
} 

