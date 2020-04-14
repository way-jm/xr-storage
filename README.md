# xr-storage

使用Typescript编写更加易用的localStorage和sessionStorage的API。


[![](https://img.shields.io/npm/v/xr-storage.svg)](https://www.npmjs.com/package/xr-storage) 
[![](https://img.shields.io/npm/types/xr-storage.svg)](https://www.typescriptlang.org) 
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Travis](https://img.shields.io/travis/alexjoverm/typescript-library-starter.svg)](https://travis-ci.org/alexjoverm/typescript-library-starter)
[![Coveralls](https://img.shields.io/coveralls/alexjoverm/typescript-library-starter.svg)](https://coveralls.io/github/alexjoverm/typescript-library-starter)


## 安装

 `npm  i xr-storage --save`
 
 `import store from 'xr-storage'`

## 2020年4月更新(Typescript支持)
在Typescript中使用:
已经添加类型声明文件到@types仓库，如需在typescript中使用，请npm install @types/xr-storage

## 使用文档
[documentation](https://way-jm.github.io/xr-storage/start/start.html)

## 关于单元测试


在本地编写了完整的单元测试，由于无法模拟node禁用cookies的方法，所以Store的12行的代码无法coverage，但是浏览器下已经测试过，没有问题  



----------|----------|----------|----------|----------|-------------------|
File      |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------|----------|----------|----------|----------|-------------------|
All files |    89.47 |       80 |      100 |    98.53 |                   |
 Store.ts |    85.45 |    77.78 |      100 |    97.87 |                12 |
 helps.ts |      100 |      100 |      100 |      100 |                   |
 index.ts |      100 |      100 |      100 |      100 |                   |
----------|----------|----------|----------|----------|-------------------|




