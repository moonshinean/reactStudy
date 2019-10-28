import React from 'react'
import { DatePicker } from 'antd'

// 如果需要使用 路由模块, 第一步，运行npm i react-router-dom / yarn add react-router-dom
// 第二步，导入路由模块

// HashRouter 表示 一个路由跟容器，将来， 所有的路由相关的东西，都要包裹在HashRouter里面，而且，一个网站中，只需要使用一次HashRouter就好了
// Router 表示路由规则，在Router 上，有两个比较重要的属性， path，component
// Link 表示一个路由的连接，就好比 vue中的<router-link to=""></router-link>标签
import {HashRouter, Route, Link} from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Movie from './components/Movie.jsx'

export default class App extends React.Component {
    constructor(props){
        super(props)
        this.state ={}
    }
    render(){
        // 当时用 HashRouter 把App 根组件的袁术包裹起来，网站就已经启用路由了
        // 在一个 HashRouter 中，只能有唯一的一个根元素
        // 在一个网站中，只需要使用唯一的一次<HashRouter> </HashRouter> 就行了
        return <HashRouter>
            <div>
            <h1>这是网站根组件</h1>
            <DatePicker></DatePicker>
            <hr/>
            <Link to = "/home">首页</Link>&nbsp;&nbsp;&nbsp;
            <Link to = "/movie/top250/10">电影</Link>&nbsp;&nbsp;&nbsp;
            <Link to = "/about">关于</Link>&nbsp;&nbsp;&nbsp;
             <hr/>
             {/* Route 穿件的标签，就是路由规则，其中 path 表示要匹配的路由，component 表示要展示的组件 */}
             {/*  在vue 中有一个 router-view 的路由标签，专门用来放置，匹配到的路由组件的，但是，在react-router中
             并没有类似于这样的标签，二是直接把Route 标签，当做 坑(占位符)*/}
             {/*  Route 具有两种身份，1、它是一个路由匹配规则，2、它是一个占位符，来表示将来匹配到的组件放到哪个位置*/}
             <Route path="/home" component={Home}></Route>
             {/* 注意：默认情况下，路由中的规则，是模糊匹配的，如果路由可以部分匹配成功，就会展示这个路由对应的组件
             如果加上exact 属性，就是精确匹配*/}
             {/* 如果要匹配参数，可以在匹配规则中，使用：修饰符，表示这个位置匹配到的是参数  */}
             <Route path="/movie/:type/:id" component={Movie} exact></Route>
             <Route path="/about" component={About}></Route>
        </div>
        </HashRouter>
    }
}