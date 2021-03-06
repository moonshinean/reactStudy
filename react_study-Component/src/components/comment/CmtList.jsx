import React from 'react'

import CMTItem from './CmtItem.jsx'
import CMTBox from './CmtBox.jsx'
// 评论列表组件

export default class CMTList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [
                {user: 'zs', content: '123'},
                {user: 'ls', content: 'qqq'},
                {user: 'was', content: 'w2w'}
            ]
        }
    }
    // 在组建尚未渲染的时候，就立即获取数据
    componentWillMount(){
        this.loadCmts()
    }
    render(){
        return <div>
            <h1>这是评论列表组件</h1>


            {/* 发表评论的组件 */}
            {/*相对于Vue中， 把父组件传递给子组件的普通属性和方法属性，区别对待，普通属性用props 接收，方法使用this.$emit('方法名')*/}
            {/*在react中，只要是传递给与子组件的数据，不管是普通的类型还是方法，都可以使用this.props 来调用*/}
            <CMTBox reload = {this.loadCmts}></CMTBox>



            {/* 循环渲染一些评论内容组件 */}
            {this.state.list.map((item, i) =>{
                return <CMTItem key={i} {...item}></CMTItem>
            })}
        </div>
    }

    loadCmts = () => {
       var list =  JSON.parse(localStorage.getItem('cmts') || '[]');
       this.setState({
             list: list
       })
    }
}