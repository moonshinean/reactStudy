// js 打包入口
// 导入 React 包
import React from 'react'
import ReactDom from 'react-dom'


import App from './App.jsx'
// 全局导入Ant Design 的样式表
// 一般，我们使用第三方UI组件，他们的样式表文件,都是以.css 结尾的，所以我们最好不要为.css 后缀名的文件，启用模块化
// 我们推荐自己不要直接手写.css 的文件，二是自己手写scss 或者 less 文件， 这样，我们就只需要为scss文件或者less 文件启用模块化就可以了；

// 由于 直接使用 Ant Design 的全部包，体积过大，所以，建议大家使用 按需导入，这样，能减少bundle.js 文件的体积



ReactDom.render(<App></App>, document.getElementById('app'))