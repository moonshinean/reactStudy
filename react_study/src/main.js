// js 打包入口

// 1、在react 学习中，需要安装 两个包 react react-dom
// 1.1 react 这个包，是专门用来创建、组件生命周期等这些的东西的；
// 1.2 react-dom 里面主要封装了和DOM操作相关的包，比如，要把组件渲染到页面上
import React from 'react'
import ReactDom from 'react-dom'

// 2、 在react 中，如果要创建 DOM 元素，只能使用React 提供的JS api 来创建，不能【直接】像Vue中那样，直接手写HTML元素

// React.createElement()方法，用于创建虚拟Dom 对象，他接受3个以及以上的参数
// 参数1: 是个字符串类型的参数，表示要创建的元素类型
// 参数2：是一个属性对象，表示创建的这个元素上，有那些属性
// 参数3：从第三个参数位置开始，后面可以放好多的的虚拟DOM对象，这写参数，表示当前元素的子节点
// var myH1 = React.createElement('h1', null, '这是一个大大的H1')

// var myDiv = React.createElement('div', {title: 'this is a div', id: 'mydiv'}, '这是一个div', myH1)

// 由于，React官方发现，如果直接让用户手写 Js 代码创建元素，用户会疯掉的，然后，用户就开始寻找新的前端框架了，于是
// React 官方就提出了一套 jSX 语法规范，能够让我们在JS 文件中，书写类似的HTML那样的代码，快熟定义虚拟的DOM结构；
// 问题: JSX(符合 XML 规范的 JS 语法)的原理是什么？？？
// 注意：千万要记住，哪怕你在JS中可以写JSX语法了，但是，JSX在内部运行的时候，也就是把类似的HTNL这样的标签代码，
// 转换为了 React.createElement 的形式

// 也就是说：哪怕我们写了 JSX这样的标签，也不是直接把我们的 HTML 标签渲染到页面中，而是先转成React.createElement  这样的代码
// ，在渲染到页面中；(JSX是一个对程序员有好的语法糖)

// 如果需要使用JSX语法，需要先安装相关的 语法转换工具
// 运行 npm i babel-preset-react -D
// var tiitle = '这是一个外部定义的title'

// var arr = []

// for(var i = 0; i< 10; i++) {
//     var p =  <p className="myClass" key={i}>你知道它的本质吗？？</p>
//     arr.push(p)
// }

// var myDiv  = <div>
//     123123
//     <h1 title={ tiitle }>真好用呀</h1>
//     <span>但是不知道本质是什么</span>
//     <p className="myClass"></p>
//     <label htmlFor="name"></label>
//     {arr}
//     {/* 这是注释 */}
// </div>


// ReactDom.render('要渲染的虚拟Dom元素', '要渲染的位置')

// 注意：ReactDom.render()方法，的第二个参数，和vue不一样，不接受 '#app'这样的字符串，二是需要传递一个原生的DOM对象。
// ReactDom.render(myDiv, document.getElementById('app'))


// 在React中，构造函数，就是一个最基本的组件   
// 如果想要把组件放到页面中去，可以把狗仔函数的名称，当做组件的名称，以 HTML 标签的形式引入页面中即可

// 注意：React 在解析所有的标签的时候，是以标签的首字母来区分的，如果标签的首字母是小写，那么久按照普通的
// HTML 标签来解析，如果首字母大写，则按照 组件的形式去解析渲染。
// 结论：组件的首字母必须是大写
// function Hello(props){
//     console.log(person.name);
//     // 在组件中，如果想要使用外部传递过来的数据，必须显示在构造函数列表中，定义 props 属性来接收
//     // 通过props 得到的数据都只是只读的，不可以修改
//     // props.name = '000'
//     // person.name = '111'
//   return <div>
//       这是我们的组件元素 ---{props.name}
//   </div>
// }

import Hello from './components/Hello.jsx'
// import myclass from './class_study'
import myclass from './class_study2'
// var name = 'zs'
// var age = 18
var person = {
    name: 'ls',
    age: '18',
    gender: '男',
    address: '北京'
}
ReactDom.render(<div>
    {/* <Hello  name ={name} age={age}></Hello> */}
    <Hello  {... person}></Hello>
</div>, document.getElementById('app'))

// 注意：这里是的 ...obj 语法，是ES6中的属性扩散，表示，把这个对象是的所有属性，展开了，放到这个位置