// 是项目的JS打包入口文件

import React from 'react'
import ReactDom from 'react-dom'

// 导入项目根组件
import App from './App.jsx'

ReactDom.render(
    <App></App>, document.getElementById('app')
)
// render(h) {
//     <App></App>,
// },