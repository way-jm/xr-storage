# qm-storage

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Travis](https://img.shields.io/travis/alexjoverm/typescript-library-starter.svg)](https://travis-ci.org/alexjoverm/typescript-library-starter)
[![Coveralls](https://img.shields.io/coveralls/alexjoverm/typescript-library-starter.svg)](https://coveralls.io/github/alexjoverm/typescript-library-starter)


### 用法
已经实现了storage的核心代码
import store from 'qm-storage'
store({method:'set',key:'testkey',value:'testvalue'})
支持的method的有set,get,clear,has,getAll...
还有很多附带功能没有做，将持续更新
1.使用rollup进行构建
2.使用vuepress书写文档
3.编写完整的单元测试
4.store会变成一个混合的typescipt对象，不单是一个函数，也是一个对象，可以用store.get,store.set方法
5.浏览器禁用cookie导致localstore不可以用的情况
...以上很多问题，会一一补充更新

