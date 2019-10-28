// js 打包入口
// 导入 React 包
import React from 'react'
import ReactDom from 'react-dom'

// 使用 JS 语法。创建虚拟Dom 元素
// var myDiv = React.createElement('div', null, '这是一个div')
 var myDiv = <div>what time is it now?</div>

//  在function 定义的组件中，如果想要使用props,必须先定义，否则无法直接使用
// 但是在class 定义的组件中，可以直接使用this.props 来直接访问，不需要预先接收props


// 使用class 创建的类，通过 extends 关键字，继承了 React.Component之后，这个类，就是一个组件的模板了
// 如果想引用这个组件，可以把类的名称，以标签的形式，导入 JSX 中使用
class Hello2 extends React.Component{
    constructor(props){
        // 注意：如果使用 extends 实现了继承，那么在 constructor 的第一行，一定要显示调用一下super()
        // super() 表示父类的构造函数
        super(props)
        // 在 constructor 中，如果需要访问 props属性，不能直接使用 this.props，而是需要在constructor 的构造器参数列表中，显示的定义props参数来接收
        // 才能正常使用；
        console.log(props);
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
        </div>
    }
 }
//  在调用Hello组件之前，先导入组件
import Hello from './components/Hello.jsx'
import Hello3 from './components/Hello3.jsx'

// 注意：以上两者创建组件的方式，有着本质上的区别，其中，
// 使用 function 构造函数穿件的组件，内部没有state私有属性，只有一个props 来接收外界传递过来的数据;
// 使用class 关键字创建的组件，内部，除了有this.props这个只读属性之外，还有一个住啊们用于存放自己私有数据的this.state属性，这个state是可读可写的
// 基于上面的区别：我们可以为这两种方创建的组件的方式，下定义了：
//  使用function 创建的组件,叫做【无状态组件】，使用class 创建的组件叫做【有状态组件】
// 有状态组件和无状态组件，最大的区别就是有无 state 属性，同事，class 创建的组件，有自己的什么周期函数，但是，function创建的组件，，没有自己的生命周期函数；
// 问题来了：什么时候是有有状态组件，什么时候使用无状态组件呢？
// 1、如果一个组件需要存放自己的私有数据，或者需要在组件的不同阶段执行不同的业务逻辑代码，此时，非常适合使用class创建出来的有状态组件；
// 2、如果一个组件，只需要根据外界传递过来的props。渲染固定的页面结构就完事了，此时，非常合适使用 function 创建出来的无状态组件；
// (使用无状态组件的小小好处, 由于剔除了组件的生命周期,所以,运行速度会相对快一丢丢)
ReactDom.render(<div>
    {/* <Hello name= 'zs' age={12}></Hello> */}
    <Hello></Hello>
    <Hello2 address="北京传智播客" info="黑马程序员"></Hello2>
    <Hello3 address="北京传智播客" info="黑马程序员"></Hello3>
</div>, document.getElementById('app'))