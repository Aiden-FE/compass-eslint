import RecommendedAbstract from './recommended-base';

/**
 * @example
 * 1. 对等依赖：npm install @typescript-eslint/eslint-plugin @typescript-eslint/parser --save-dev
 * 2. 更新.eslintrc
 * {
 *   extends: ['airbnb', 'airbnb-typescript/base'],
 *   parserOptions: {
 *     project: './tsconfig.json'
 *   }
 * }
 * @description 适用于基础TS环境 [详情文档地址](https://github.com/search?q=airbnb-typescript)
 */
export default {
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    RecommendedAbstract,
  ],
};
