import React from 'react'

//  这是父组件
export default class Parent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            msg: '这是父组件的 msg 消息'
        };

    }

    render(){
        return <div>
            <h1>这是父组件</h1>
            <br/>
            <button onClick={this.changeMsg}>点击修改msg</button>
            <Son msg={this.state.msg}></Son>
        </div>
    }

    changeMsg = ()=> {
        this.setState({
            msg:'娃哈哈'
        })
    }
}

//  这是子组件
class Son extends React.Component {
    constructor(props){
        super(props)
        this.state = {};

    }

    render(){
        return <div>
             <h3>这是子组件 --- {this.props.msg}</h3>
        </div>
    }
    // 组将将要接收外界传递过来的新的props 属性值
    // 当子组件第一次被渲染到页面上的时候，不会触发这个函数
    // 只有当父组件，通过某些事件，重新修改了传递给子组件的props 数据之后，才会触发 componentWillReceiveProps
    componentWillReceiveProps(nextProps){
       console.log('被触发了')
    //  注意：在componentWillReceiveProps 被触发的时候，如果我们使用的this.props 来获取数据属性值，这个 属性值，不是最新的，是上一旧的就属性值 
    //  如果想要获取新的属性值，需要通过 componentWillReceiveProps 的参数列表来获取 
    console.log(this.props.msg + '-------' + nextProps.msg)
    }
}