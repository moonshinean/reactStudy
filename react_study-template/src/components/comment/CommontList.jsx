import React from 'react'

import CommontItem from './CommentItem.jsx'
import Liststyle from '../../css/commentList.css'
// import  '../../css/commentList.css'

export default class CommontList extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        comts: [
            {user: '张三', content: '哈哈，沙发'},
            {user: '张三', content: '哈哈，沙发'},
            {user: '张三', content: '哈哈，沙发'},
            {user: '张三', content: '哈哈，沙发'},
            {user: '张三', content: '哈哈，沙发'},
        ]
      }
    }
    render(){

        // 第一种循环的方法,比较落后,要把JJSX和js语法结合起来使用
        // var arr = []
        // this.state.comts.forEach(item => {
        // arr.push(<h1>{item.user}</h1>)
        // });
        // return <div>
        //     {arr}
        // </div>
        return <div>
            <h1 className="title">评论组件列表</h1>
            {/* <h1 className="title">评论组件列表</h1> */}
            {/* 我们可以直接使用JSX语法内部，使用数组的map函数，来遍历数组的每一项，并使用返回操作后台最新的数组 */}
          {this.state.comts.map((item, i) => {
          return <CommontItem {...item} key= {i}></CommontItem>
          })}
        </div>
    }
}