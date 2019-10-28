import React from 'react'
import {HashRouter, Route, Link} from 'react-router-dom'

// 导入ant 的组件
import { Layout, Menu } from 'antd';

import styles from './css/app.scss'

// 导入组件
import Home from './component/Home/Home.Container.jsx'
import About from './component/About/About.Container.jsx'
import Movie from './component/Movie/Movie.Container.jsx'
const { Header, Content, Footer } = Layout;
export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentWillMount(){
        console.log(window.location.hash.split('/')[1])
    }
    render(){
      return  <HashRouter>
       <Layout className="layout" style = {{height: '100%'}}>
            <Header>
            <div className={styles.logo} />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={[window.location.hash.split('/')[1]]}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="home">
                    <Link to="/home">首页</Link>
                </Menu.Item>
                <Menu.Item key="movie">
                     <Link to="/movie/in_theaters/1">电影</Link>
                </Menu.Item>
                <Menu.Item key="about">
                      <Link to="/about">关于</Link>
                </Menu.Item>
            </Menu>
            </Header>
            <Content style={{ padding: '0 50px', background: '#fff', flex: '1'}}>
                <Route path="/home" component={Home}></Route>
                <Route path="/movie" component={Movie}></Route>
                <Route path="/about" component={About}></Route>
            </Content>
            <Footer style={{ textAlign: 'center' }}>传值博客©2018 黑马程序员 </Footer>
        </Layout>
      </HashRouter>
    }
}