module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper:{
    "^@/(.*)$":"<rootDir>/src/$1"
  },
  moduleFileExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx',
    'json',
    'vue'
  ],
  transform: {
    // .vue文件用 vue-jest 处理
    '^.+\\.vue$': '@vue/vue3-jest',
    // .js或者.jsx用 babel-jest处理 
    '^.+\\.js$': 'babel-jest',
  }
}