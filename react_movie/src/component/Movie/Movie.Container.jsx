import React from 'react'

import { Layout, Menu } from 'antd';

const { Content, Sider } = Layout;

import {Route, Link, Switch} from 'react-router-dom'
import MovieList from './MovieList.jsx'
import MovieDetail from './movieDetail.jsx';
export  default class Movie extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render() {
        return  <Layout style={{height: '100%'}}>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={[window.location.hash.split('/')[2]]}
            style={{ height: '100%', borderRight: 0 }}
          >
              <Menu.Item key='in_theaters'>
                  <Link to="/movie/in_theaters/1">正在热映</Link>
              </Menu.Item>
              <Menu.Item key="coming_soon">
                 <Link to="/movie/coming_soon/1">即将上映</Link>
              </Menu.Item>
              <Menu.Item key="top250">
                 <Link to="/movie/top250/1">top250</Link>
              </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ paddingLeft: '1px' }}>
          <Content style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 280,
            }}
          >
              {/* 在匹配路由规则的时候，这里提供了两个参数*/}
              {/* 如果想从路由的规则中，提取参数，需要使用 this.props.match.params.*** 来获取*/}
              
              {/* 注意：哪怕是为路由启用了 exact 精确匹配规则，也会从上到下，把所有的路由规则匹配一遍 */}
              <Switch>
                {/* 使用路由中的Switch 组件，能够指定，如果前面的路由匹配规则优先匹配到了，则放弃匹配后续的路由 */}
                  <Route exact path="/movie/detail/:id" component={MovieDetail}></Route>
                  <Route exact path="/movie/:type/:page" component={MovieList}></Route>
              </Switch>
          </Content>
        </Layout>
      </Layout>
    }
}