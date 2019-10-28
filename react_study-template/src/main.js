// js 打包入口
// 导入 React 包
import React from 'react'
import ReactDom from 'react-dom'

import CommontList from './components/comment/CommontList.jsx'
// 导入评论的样式【注意，这种样式是全局的】
// import './css/commentList.css' 

ReactDom.render(<div>
    <CommontList></CommontList>
</div>, document.getElementById('app'))