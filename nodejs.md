# 基础规范
以 [JavaScript Standard Style](https://standardjs.com/rules-zhcn.html "JavaScript Standard Style") 为基础，使用 [ESLint](https://eslint.org/ "ESLint") 工具，方便后续增加团队自定义规范。

## 安装相应模块
```shell
npm install --save-dev eslint eslint-config-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node
```

## ESLint 配置：
```javascript
// .eslintrc.js

module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: ["standard"],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
    semi: "off",
    quotes: "off",
    "spaced-comment": "off",
    "prefer-const": "off",
    "space-before-function-paren": "off",
    eqeqeq: "off",
    "one-var": "off"
  }
};

```

# 补充规范
# 最佳实践
参考资料：
[Node.js 最佳实践](https://github.com/goldbergyoni/nodebestpractices/blob/master/README.chinese.md "Node.js 最佳实践")
