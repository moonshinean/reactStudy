import React from 'react'


export default class BindThis extends React.Component {
    constructor(props){
       super(props)

       this.state = {
           msg: '123'
       }
      //  绑定this，并传参的方式2： 在构造函数绑定并传参，
     //   注意：当为一个函数，调用bind 改变this指向后，bind 函数调用的结果，有一个返回值，这个值，就是被改变的this指向后的函数的引用
    //  注意: bind 不会修改原函数this 的指向
    this.changeMsg2 =  this.changeMsg2.bind(this,'小骄傲','小瓜瓜')
    }
    render(){
        return <div>
            <h1>绑定This并传参的几种方式</h1>
            {/* bind 的作用： 为前面的函数，修改函数内部的this 指向，让函数内部的this, 指向bind 指向参数列表中的第一个参数 */}
            {/* bind 和 cell/apply 之间的区别： */}
            {/*cell/apply 修改完this指向后，会立即调用前面的函数。但是bind 只是修改this指向，并不会调用 */}
            {/*注意：bind中第一个参数，是用来修改this指向的，第一个参数后面的所有参数，都会当做将来调用前面函数时候的参数传递进去  */}
            {/* 方式一： 在事件处理函数中直接使用bind 绑定this并传参 */}
            <input type="button" value="绑定this并传参的方式1" onClick = {this.changeMsg.bind(this,'小猪', '小鸥')}/>
            <input type="button" value="绑定this并传参的方式2" onClick = {this.changeMsg2}/>
            {/* <input type="button" value="绑定this并传参的方式3" onClick = {() => {this.changeMsg('必定','123')}}/> */}
            <input type="button" value="绑定this并传参的方式3" onClick = {() => this.changeMsg('必定','123')}/>
            <hr/>
            <h3>{this.state.msg}</h3>
            {/* 在Vue中，有v-model 指令来实现数据的双向数据绑定，但是 在reacr中， 根本就没有指令的概念，因此 React 默认也不支持双向数据绑定 */}
            {/* React只支持，把数据从state上传输到页面，但是无法自动实现数据从页面传输到state中，进行保存，也就是 React 不支持数据的自动你想传输 */}
            {/* 注意：如果为表单元素，提供了value 属性绑定，那么，必须同时为表单元素绑定readOnly，或者提供要给onChage 事件 */}
             {/* 如果提供了 readOnly，表示这个元素只读的不能被修改 */}
             {/* 如果提供了 onChange，表示这个元素的值可以被修改，但是，要自己定义修改逻辑 */}
            <input type="text" style={{width:'100%'}} value={this.state.msg} onChange= {this.txtChanged} ref='txt'/>
        </div>
    }
   // 为文本框绑定textChanged 事件
    txtChanged = (e) =>{
        // console.log(123)
        // 如果想让文本框在触发的onChange的时候,同时把文本框最新的值，保存到state 中，那么我们需要手动调用 this.setState

        // 获取文本框中 最新文本的3中方式
        // 1、使用document.getElementById 来拿
        // 2、使用 ref 来拿
        // console.log(this.refs.txt.value)
        // 3、使用 事件对象的参数e 来拿，(e.target.value 就表示触发这个事件的事件源对象，得到的是一个原生的JS DOM 对象
        console.log(e.target.value)
        this.setState({
            msg: this.refs.txt.value
        })
    }
    changeMsg(arg1, arg2){
        // 注意：这里的方式，是一个普通的 方法，因此，在触发的时候，这里的this，是undefined
        console.log(this)
        this.setState({
            msg: '绑定this并传参的方式1' + arg1 + arg2
        })
    }

    changeMsg2(arg1, arg2){
        // 注意：这里的方式，是一个普通的 方法，因此，在触发的时候，这里的this，是undefined
        console.log(this)
        this.setState({
            msg: '绑定this并传参的方式2' + arg1 + arg2
        })
    }

    changeMsg3(arg1, arg2){
        // 注意：这里的方式，是一个普通的 方法，因此，在触发的时候，这里的this，是undefined
        console.log(this)
        this.setState({
            msg: '绑定this并传参的方式2' + arg1 + arg2
        })
    }

}