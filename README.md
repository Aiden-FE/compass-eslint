# @compass-aiden/eslint-plugin
> Recommend eslint config

**为什么会有它?**

统一Eslint代码校验标准

**它遵循什么标准?**

将整个Eslint规范分为四层,先后顺序如下,后置规则覆盖前置规则:
1. airbnb, 业内推荐度极高的标准
2. 框架推荐标准, 适用于具体运行环境的标准,诸如js,ts,react,vue,angular等等
3. 抽象的可共用标准, 填补前两条未覆盖的推荐规则或修复过于严苛难落地的规则
4. 业务标准, 实际落地时,由业务项目再次覆盖的规则 (本库不涉及此层)

如您想为第三层贡献规则,请根据 ISSUES 模板的引导提交你的贡献,非常感谢.

## 快速上手

`npm install @compass-aiden/eslint-config eslint eslint-plugin-import --save-dev` 在开发环境下安装依赖

### Typescript环境使用

更新.eslintrc配置文件:
```javascript
// 使用eslint配置
module.exports = {
    parserOptions: {
        project: './tsconfig.json'
    },
    extends: [
        // typescript使用此配置
        '@compass-aiden/eslint-config/ts',
    ],
}
```

### JavaScript环境使用

更新.eslintrc配置文件:
```javascript
// 使用eslint配置
module.exports = {
    extends: [
        '@compass-aiden/eslint-config/js',
    ],
}
```

## 本地开发

`pnpm dev` 启动开发模式

`pnpm build` 打包构建

`pnpm lint` 执行代码校验

### 发布

`nrm use npm` 切换源为npm官方源,如是可跳过此步骤

`npm adduser` 登陆,如已登陆可跳过

`npm publish` 发布

## Roadmap

- [x] Support Typescript plugin
- [x] Support JavaScript plugin
- [ ] Add issue template
- [ ] Support Vue3 plugin
- [ ] Support Vue2 plugin
- [ ] Support React plugin
- [ ] Support Next plugin
