module.exports = {
  root: true, // 表明为根结点的eslint配置，不再向上查找
  env: {
    browser: true, // 表明在浏览器中直接运行，window等全局变量可以直接调用，不需要申明
    commonjs: true,
    es2021: true,  // 直接设置环境为es2021 ,自动设置ecmaVersion 为2021
  },
  // 全局变量申明，防止eslint报错
  globals: {
    withDefaults: "readonly",
    defineProps: "readonly",
  },
  // extends 申明检查时使用那些规范，可省略eslint-config-
  extends: [
    "plugin:vue/base", // 启用正确 ESLint 解析的设置和规则。
    "plugin:vue/vue3-essential", // 以及防止错误或意外行为的规则。
    "plugin:vue/vue3-strongly-recommended", // 加上可显着提高代码可读性和/或开发体验的规则。
    "plugin:vue/vue3-recommended", // 加上强制执行主观社区默认值的规则，以确保一致性。
    "standard", // eslint-config-standard包 标准语法规范
    "prettier", // prettier 规范 放在最后覆盖之前的规范
  ],
  parser: "vue-eslint-parser",
  // 解析器配置
  parserOptions: {
    ecmaVersion: 12, // es 12 的版本
    ecmaFeatures: { // 如果您使用 JSX，则需要在 ESLint 配置中启用 JSX。
      jsx: true,
    },
    parser: "@typescript-eslint/parser",
  },
  plugins: ["vue", "@typescript-eslint"],
  // 使用extends中的成套规范，在rules修改部分规范
  rules: {
    camelcase: "off",
    "spaced-comment": "off",
  },
};
