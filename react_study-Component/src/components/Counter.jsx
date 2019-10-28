import React from 'react'
import ReactTypes from 'prop-types'

// 咱们封装组件的目的是为了团队开发更方便,有的人只负责开发组件，有的人只负责调用别人开发好的组件
// 最好在封装组件的时候，为组件中的一些必要数据，进行类型校验
export default class Count extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: props.initCount  // 基数，把外界传递过来的 initCount 赋值给state中的 count值
            // 这样就count 改成 可读可写的state属性，今后。就能实现点击按钮，count值 + 1的需求了
        };
    }
    // 在封装一个组件的时候，肯定有一些数据是必须的，哪怕用户没有传递一些相关的启动参数，这时候，组件内部，尽量给自己提供一个默认值：
    //  在React 中，使用静态的defaultProps 属性，来设置组件的默认属性值；
    static defaultProps = {
        initCount: 0
    }
    // 这是创建一个静态的propTypes 对象，在这个对象中，可以把外界传递过来的属性，做类型校验；
    // 注意：如果要为传递过来的属性做类型校验，必须安装React 提供的第三方包，叫做prop-types：
    // prop-types 大概在 v15.*之前，并没有单独抽离出来，那时候，还和react 包在一起；后来，从 v15.*之后，官方把类型校验的模块哦，单独抽离为一个包，就叫做prop-types
    static propTypes = {
        initCount: ReactTypes.number // 这是使用 prop-types包进行类型检测
    }
    // 在组建即将挂载到页面上执行，此时，组件尚未挂载到页面中
    // 此时内存中的虚拟DOM也还没有开始创建
    componentWillMount(){  // 这个函数等同于 vue 中的created 函数
        // 此时。无法获取到页面上的任何元素，因为虚拟DOM和页面都还没有开始渲染，【在这个阶段，不能去操作页面上的DOM元素】
        // console.log(document.getElementById('myh'))
        // console.log(this.props.initCount)
        this.myselFunc();
    }


    // 当执行到这个生命周期函数的时候，即将要来时渲染内存中的虚拟DOM了,当这个函数执行完， 内存中渲染好的虚拟DOM，但是，页面上未真正显示虚拟DOM元素呢；
    render(){
        // 在return之前，虚拟DOM 都还没有开始创建，页面上也是空的，根本拿不到任何的元素

       // 在组件运行阶段中， 每当调用render 函数的时候，页面上的DOM元素，还是之前旧的    
        console.log(this.refs.h3 && this.refs.h3.innerHTML)  // 预防第一次运行render函数找不到h3的解决方法

        return <div>
            <h1>这是以个Counter 计算器组件</h1>
            <input type="button" value="+1" id="btn"/>
            <div id="myh" ref="h3">初始值为：{this.state.count}</div>
        </div>
        // 在return 执行完毕后， 虚拟DOM创建好了，但是，还没有挂载到真正的页面中。
    }
    // 当组件挂载到页面上之后，会进入到这个生命周期函数，只要进入到这个生命周期函数了，必然说明，页面上, 已经有了可见的DOM 元素了
    // 当组件执行完componentDidMount 函数后，就进入到了运行中的状态，所以，componentDidMount 是创建阶段的最后一个函数
    componentDidMount(){
    //  在这个函数中，我们可以放心的去操作页面上你需要使用的DOM元素 元素了；
    //  如果我们想操作DOM袁术，最早，只能在componentDidMount 中进行；
    //  componentDidMount 相当于VUe 中的 mounted 函数
       console.log(document.getElementById('btn'))
        document.getElementById('btn').onclick = () => {
            this.setState({
                count: this.state.count + 1
            })
        }
        console.log(this)
    }

    // 从这里开始就进行到了组件的运行中状态
    // 判断组件是否需要更新
    shouldComponentUpdate(nexProps,nexState){
        // 1、 在shouldComponentUpdate 中 必须要求返回一个布尔值
        // 2、在shouldComponentUpdate 中，如果返回的值是false，则不会继续执行后续的生命周期函数，而是值节退回到了运行中的状态
        // 此时有序 后续的render 函数并没有被调用，因此，页面不会被更新，但是组件的state状态却被改了；

        // 需求：如果 state 中的count 值是偶数，则 更新页面，如果count 值是奇数，则不更新页面,我们想要的页面效果：4，6, 8，10, 12
        // 经过打印测试后发现，在shouldComponentUpdate 中，通过this.state.count 拿到的值，是上一次的旧数据，并不是最新的：
        console.log(this.state.count + '---' + nexState.count)
        // return (this.state.count + 1) % 2  === 0? true:false;
        // return nexState.count % 2 === 0? true: false;
        return true;
    }
    //  这是组件将要更新，此时尚未更新，在进入做个生命周期函数的时候，内存中的虚拟DOM是旧的，页面上的DOM元素也是旧的
    componentWillUpdate(){
        // 经过打印分析，得到，此时页面上的DOM节点，都是旧的，应该慎重操作,因为你可能操作的都是旧的
    //    console.log(document.getElementById('myh').innerHTML)
    //    console.log(this.refs.h3.innerHTML)
    }
   //  组件完成了更新，此时 state 中的数据，虚拟DOM 页面上的DOM, 都是最新的，此时，可以放心大但的去操作页了
    componentDidUpdate(){
        console.log(this.refs.h3.innerHTML)
    }
    myselFunc(){
        console.log('我是自己定义的函数')
    }
}