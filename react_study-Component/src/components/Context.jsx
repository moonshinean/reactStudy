import React from 'react'
import ReactTypes from 'prop-types'
/* export default class Con1 extends React.Component {
 
    constructor(props){
        super(props)
        this.state = {
            color: 'red'
        }
    }
    render() {
        return <div>
              <h1>这是父组件</h1>
              <Con2 color = {this.state.color}></Con2>
        </div>
    }
   
}

class Con2 extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render() {
        return <div>
              <h3>这是子组件</h3>
              <Con3 color= {this.props.color}></Con3>
        </div>
    }
}
class Con3 extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render() {
        return <div>
              <h5 style = {{color: this.props.color}}>这是孙子子组件</h5>
        </div>
    }
} */


export default class Con1 extends React.Component {
 
    constructor(props){
        super(props)
        this.state = {
            color: 'red'
        }
    }
    render() {
        return <div>
              <h1>这是父组件</h1>
              <Con2 color = {this.state.color}></Con2>
        </div>
    }
    // 1、在父组件中，定义一个function，这个function 有个固定的名称，叫做getChildContext，内部，必须返回一个对象，这个对象，就是要共享给所有子孙组件的数据

    getChildContext(){
        return {
            color: this.state.color
        }
    }
    
    // 2、使用属性校验，规定一下传递给子组件的数据类型，需要定义一个静态的(static)
    // childContextTypes(固定名称, 不要改)
   static childContextTypes = {
       color: ReactTypes.string  // 规定了 传递给子组件的数据类型
   }   
}

class Con2 extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render() {
        return <div>
              <h3>这是子组件</h3>
              <Con3 color= {this.props.color}></Con3>
        </div>
    }
}
class Con3 extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    // 3、上来之前，先来个属性校验，去检验一下父组件传递过来的参数类型
    static contextTypes = {
        color: ReactTypes.string   //这里。如果是子组件，想使用父组件通过Context 共享的数据，那么在使用之前，一定要先做一下数据类型效验
    }
    render() {
        return <div>
              <h5 style = {{color: this.context.color}}>这是孙子子组件 --- {this.context.color}</h5>
        </div>
    }
}