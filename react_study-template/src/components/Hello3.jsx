import React from 'react'

export default  class Hello3 extends React.Component{
    constructor(props){
        // 注意：如果使用 extends 实现了继承，那么在 constructor 的第一行，一定要显示调用一下super()
        // super() 表示父类的构造函数
        super(props)
        // 在 constructor 中，如果需要访问 props属性，不能直接使用 this.props，而是需要在constructor 的构造器参数列表中，显示的定义props参数来接收
        // 才能正常使用；
        console.log(props);

        // 注意： 这是固定写法，this.state 表示当前组件实例的私有属性对象，就好比 vue 中，组件实例身上的data(){return {}}函数
        // 如果想要使用㢟state 上的数据，直接通过 this.state.***来访问即可
        this.state = {
            msg: '这是Hello3 组件私有的 msg属性',
            info: '撒我的卡'
        }
    }
    //报错信息1： No `render` method found on the returned component instance: you may have forgotten to define `render`.
    // 通过分析以上报错信息，发现，提示我们说，在class实现的组件内部，必须定义一个render 函数

    // 报错信息2：Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.
    // 通过分析以上错误，发现，在render函数中，必须return 一个东西，如果没有什么需要被return 的，则需要 return null
   
    // 虽然在 React dev tools 中，并没有显示说class 组件中的props 是只读的，但是经过测试得知，其实，
    // 只要是组件的props，都是只读的：
    // this.props.address = '123'
    render(){
        return <div>
            <h1>这是class组件创建的组件</h1>
            <h3> 外界传递过来的数据是：{this.props.address} --- {this.props.info}</h3>
            <span>{this.state.msg}</span>
            <button>修改msg</button>
        </div>
    }
 }
