// js 打包入口
// 导入 React 包
import React from 'react'
import ReactDom from 'react-dom'

// 导入评论的样式【注意，这种样式是全局的】
// import './css/commentList.css' 

// 导入计数器组件
// import Parent from './components/TestReceiveProps.jsx'
import BindThis from './components/bindThis.jsx'
// import CMTList from './components/comment/CmtList.jsx'
import Context from './components/Context.jsx'

ReactDom.render(<div>
    {/* 每个用户在使用组件的时候，必须传递一个默认的数量值，为组件的初始化数组 */}
    {/* <Count initCount= {2}></Count> */}
     {/* <BindThis></BindThis> */}
     <Context></Context>
     
    <br/>
    {/* <Count initCount= {3}></Count> */}
</div>, document.getElementById('app'))