# qm-storage

使用Typescript编写更加易用的localStorage和sessionStorage的API


[![](https://img.shields.io/npm/v/qm-storage.svg)](https://www.npmjs.com/package/qm-storage) 
[![](https://img.shields.io/npm/types/qm-storage.svg)](https://www.typescriptlang.org) 
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Travis](https://img.shields.io/travis/alexjoverm/typescript-library-starter.svg)](https://travis-ci.org/alexjoverm/typescript-library-starter)
[![Coveralls](https://img.shields.io/coveralls/alexjoverm/typescript-library-starter.svg)](https://coveralls.io/github/alexjoverm/typescript-library-starter)


## 安装


 `npm  i qm-storage --save`
 
 `import store from 'qm-storage'`
## 使用文档


[documentation](https://way-jm.github.io/qm-storage/start/start.html)

## 关于单元测试


在本地编写了完整的单元测试，由于还没有找到模拟node禁用cookies的方法，所以Store的12行的代码无法coverage，但是浏览器下已经模拟测试过，没有问题  
以下是单元测试结果:
![图片](https://way-jm.github.io/wayswipe/static/picture/test.jpg)

