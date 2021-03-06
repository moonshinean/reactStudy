## 移动App开发
- 原生开发：它的英文单词是（nativeApp），指的是使用Ios，android 官方提供的工具，开发平台、 配套语言进行 手机App 开发的 方式;
- 混合开发：（HybirdApp）就是使用前端已有的技术，html + css + js，然后 在搭配一些相关的打包编译的技术，就能够开发出一个手机App，安装到手机中进行使用
- 注意：React 中，我们全部使用Es6语法
- js是解析执行的，Java、C#是编译执行的
- vue + weex， angular +ionic， react + ReactNative(都可以开发app)
## 前端三大主流框架
- Angular.js: 出来的最早的前端框架，学习曲线比较陡，NG1 学起来比较繁琐，NG2 开始，进行了一系列的改革，也开始启用组件化了，在NG中，也支持TS编程
- Vue.js: 最火的一门前端框架，他是中国人开发的，对我们来说，文档要友好一些
- React.js：最流行的一门框架，因为它的设计很优秀。
### 组件化和模块化的区别
- 什么是模块化：从**代码**的角度，去分析问题，我们把编程时候的业务逻辑，分割到不通的模块中来进行开发，这样能够方便**代码的重用**
- 什么是组件化：从**UI** 的角度去分析问题，把一个页面拆分为一些互不相干的小组件，随着我们项目的开发，我们手里的组件会越来会多，最后，我们如果
需要实现一个页面，可能直接把现有的组件拿过来进行拼接，就能够快熟得到一个完整的页面，这方便了**UI元素的重用**；**组件是元素的集合体**
## React 中几个核心的概念
## 虚拟DOM(Virtual Document Object Model)
- DOM的本质是什么: 就是用JS表示的UI元素
- DOM和虚拟DOM的区别：
   - DOM 是有浏览器中的js提供的功能，所以我们只能人为的使用，浏览器提供的固定的API来操作DOM对象，
   - 虚拟DOM: 并不由浏览器提供的，而是我们程序员手动模拟实现的，类似于浏览器中的DOM，但是有着本质的区别

### diff 算法
 - tree diff: 新旧DOM树，逐层对比的方式，就叫做 treediff，每当我们从前到后，把所有层的节点对比完后，必然能够找到那些 需要被更新的元素；
 - component diff：在对比每一层的时候，组件之间的对比，叫做 component diff,当对比组件的时候，如果两个组件的类型形同，则暂时不需要被更新，如果组件类型不同，则立即将组件移除，新建一个组件，替换到被移除的位置;
 - element diff: 在组件中，每个元素之间也要进行对比，那么，元素级别的对比，叫做element diff；
 - key： key 这个属性，可以把页面上的DOM节点 和虚拟DOM中的对象，做一层关联关系;
 ## JSX 语法
 1、如果需要使用JSX语法，需要先安装相关的 语法转换工具，运行 npm i babel-preset-react -D，然后在.babelrc 添加语法配置；   
 2、JSX语法的本质：还是以成React.createElement 的形式来实现的，并没有直接把用户写的HTML代码直接渲染到页面上   
 3、如果要在JSX语法内部，书写JS代码，那么，所有的代码必须写到 {} 内部。   
 4、 当我们的编译引擎，在编译JSX代码的时候，如果遇到了 `<` 那么就把它当做HTNL代码去编译，如果遇到了`{}`就把花括号内部的代码当做普通的JS代码去编译；   
 5、在`{}`内部可以写任何符合JS规范的代码   
 6、在JSX中，如果要为元素添加`class` 属性，那么必须写成,`className`,因为`class`在ES6中是一个关键字; 和 `class` 属性类似，label标签的 `for`属性需要替换为`htmlFor`   
 7、在JSX 创建DOM的时候，所有的节点，必须有唯一的根元素进行包裹   
 8、如果要写注释了，注释必须放到 {} 里面；
 ## 组件的生命周期
 - 概念: 在组建创建、到加载到页面上运行、以及组件被销毁的过程中，总是伴随着各种各样的事件，这些在组件特定时期，处罚的事件，统称为组件的生命周期;
 - 组件的生命周期分为三个部分:
    - **组件创建阶段**：组件创建阶段的生命周期函数，有一个显著的特点: 创建阶段的生命周期函数,在组件的一辈子中，只执行一次；
    > componentWillMount: 组件将要被挂载，此时还没有开始渲染虚拟DOM
    > render: 第一次开始渲染真正的虚拟DOM，当render执行完，内存中就有了完整的虚拟DOM了
    > componentDidMount： 组件完成了挂在，此时，组件已经显示到了页面上，这个方法执行完，组件就进入了运行中的状态
    - **组件的运行阶段**：也有一个显著的特点，根据组件的state和props的改变，有选择性的触发0次或者多次;  
    > 1、componentWillReceviewProps: 组件将要接收的新属性，此时，只要这个方法被触发，就证明父组件为当前子组件传递了新的属性值;componentWillReceviewProps(nextProps)   
    > 2、shouldComponentUpdate: 组件是需要被更新，此时组件尚未被更新，但是，props和state 肯定是最新的
    shouldComponentUpdate(nextPros,nextState)   
    > 3、componentWillUpdate: 组件将要被更新，此时，尚未开始更新，内存中的DOM还是旧的
    componentWillUpdate(nextPros,nextState)   
    > 4、 render: 此时，又要重新根据新的state 和 props 重新渲染 一颗内存中的 虚拟DOM树，当render 调用完毕，内存中的旧DOM树，已经被新的DOM树替换了!此时页面还是旧的。   
    > 5、componentDidUpdate: 此时，页面又被重新渲染了，state 和 虚拟DOM 和页面已经完全保持同步
    componentDidUpdate(prvProps,prevState)   
    - **组件的销毁阶段**：也有一个显著的特点，一辈子只执行一次；
    > componentWillUnmount: 组件将要被卸载，此时组件还可以正常使用;
    ## context 使用
    - getChildContextTypes (几个属性方法， 前三个，后三个，后两个)