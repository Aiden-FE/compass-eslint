import json from '@rollup/plugin-json';
import ts from 'rollup-plugin-ts';
import { builtinModules } from 'module';
import { terser } from 'rollup-plugin-terser';
import summary from 'rollup-plugin-summary';
import commonjs from '@rollup/plugin-commonjs';

const isProd = !process.env.ROLLUP_WATCH;

/**
 * @description 获取构建插件
 * @param disablePlugins 待禁用的插件
 * @return {(Plugin|false|{generateBundle: generateBundle, name: string})[]}
 */
function getPlugins(disablePlugins = []) {
  return [
    json(),
    ts(),
    !disablePlugins.includes('commonjs') && isProd && commonjs(),
    !disablePlugins.includes('terser') && isProd && terser(),
    !disablePlugins.includes('summary') && isProd && summary({
      totalLow: 1024 * 8,
      totalHigh: 1024 * 20,
      showBrotliSize: true,
      showGzippedSize: true,
      showMinifiedSize: true,
    }),
  ];
}

/**
 * @description 获取要排除的外部选项
 * @param {string[]} additionalExternal
 * @return {string[]}
 */
function getExternal(additionalExternal = []) {
  return [...builtinModules].concat(additionalExternal || []);
}

/**
 * @description 获取输出配置项
 * @param options 文档: https://www.rollupjs.com/guide/big-list-of-options
 * @return {Record<string, unknown>}
 */
function getOutput(
  options = { format: 'es' },
) {
  return {
    dir: 'dist',
    chunkFileNames: 'bundle/chunk.[format].[hash].js',
    entryFileNames: '[name].[format].js',
    sourcemap: isProd,
    ...options,
  };
}

export default [
  isProd ? {
    input: 'src/main.ts',
    output: getOutput({ format: 'cjs' }),
    external: getExternal(),
    plugins: getPlugins(),
  } : {
    input: 'src/main.ts',
    output: getOutput({ format: 'cjs' }),
    external: getExternal(),
    plugins: getPlugins(),
    watch: {
      include: ['src/**/*.ts'],
    },
  },
];
