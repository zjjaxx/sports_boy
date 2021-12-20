console.log("trigger jest config.js")
module.exports = {
  moduleFileExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx',
    'json',
    'vue'
  ],
  transform: {
    //.ts文件用ts-jest处理
    '^.+\\.tsx?$': 'ts-jest',
    // .vue文件用 vue-jest 处理
    '^.+\\.vue$': '@vue/vue3-jest',
    // .js或者.jsx用 babel-jest处理 
    '^.+\\.jsx?$': 'babel-jest',
  }
}