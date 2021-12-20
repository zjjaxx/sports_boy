console.log("trigger babel config.js",process.env.MODE)
const presets=[
  [
    "@babel/env",
    {
      useBuiltIns: false
    }
  ],
]
if(process.env.MODE=="test"){
  presets.push(["@vue/babel-preset-jsx"])
}
module.exports={
  presets,
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": 3
      }
    ]
  ]
}