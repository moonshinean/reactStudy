import React from 'react'
import { Spin, Alert, Pagination  } from 'antd';
import MovieItem from './MovieItem.jsx'
import fetchJSONP from 'fetch-jsonp'

export default class MovieList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            movies: [],
            nowPage: parseInt(props.match.params.page) || 1, // 当前展示第几页数据
            pageSize: 10, //每页显示多少条数据
            total: 0 , //当前电影分类下，总共有多少条数据
            isloading: true,  //数据是否加载，如果为true 表示正在加载数据，
            movieType: props.match.params.type,  //保存一下 要获取的电影类型
            key:'b7d4fe0a377c551ddde70389f73b4e2b'
        }
    }
    componentWillMount(){
        // fetch('http://127.0.0.1:8081/getImageList', { method: 'POST'})
        // .then(response => {   // 当时用 fetch API来获取数据的时候，第一个.then 中， 获取不到数据，
        //     // 第二个.then 中拿到的是一个 Response对象，我们可以调用response.json()得到一个promise
        //     // console.log(value)
        //     return response.json()
        // }).then(data =>{
        //     console.log(data)
        // })
        // setTimeout( ()=> {
        //     // 假设1秒以后, 数据获取回来了
        //       this.setState({
        //           isloading: false
        //       })
        // }, 1000 )
     
        this.loadMovieListByTypeAndPage();
    }
    // 组件将要接收新属性
    componentWillReceiveProps(nextProps){
        // c
        // console.log(nextProps)
        // 每当地址栏变化的时候， 重置state 中的参数选项
        this.setState({
            isloading: true, // 又要重新加载电影数据了
            nowPage: parseInt(nextProps.match.params.page) || 1 , // 要获取第几页的数据
            movieType: nextProps.match.params.type, //电影类型
        }, function(){
            this.loadMovieListByTypeAndPage();
        })
    }
    render(){
        return  <div>
            {this.renderList()}
        </div>
    }

    // 根据电影类型和页面来获取数据
    loadMovieListByTypeAndPage = () => {
        // 注意：默认的 window.fetch 受到跨域限制,无法直接使用，这时候，我们使用第三方包
        // // fetch-jsonp 来发送JSONP请求，它的用法，和浏览器内置的fetch完全兼容
        // const start = this.state.pageSize * (this.state.nowPage -1)
        // const url = `http://v.juhe.cn/movie/movies.today?key=${this.state.key}&cityid=3`

        // fetchJSONP(url).then(
        //     Response => Response.json()
        // ).then(data => {
        //     console.log(data)
        //     this.setState({
        //       isloading: false
        //      })
        // })

        const data = require('../../test_data/in_theaters.json')
        setTimeout(() => {
            this.setState({
                 isloading: false,
                 movies: data.result
              })
            }, 1000)

    }

    // 判断是否在加载数据
    renderList = () => {
           if(this.state.isloading) {   //正在加载中
              return  <Spin tip="Loading...">
                <Alert
                message="正在请求电影列表"
                description="精彩内容即将呈现..."
                type="info"
                />
            </Spin>
         } else {   // 加载完成
               return <div>
                     <div style={{display:'flex',flexWrap: 'wrap'}}>
                        {this.state.movies.map((item, i) => {
                            return <MovieItem key = {i} {...item} history={this.props.history}></MovieItem>
                        })}
                    </div>
                    <Pagination defaultCurrent={this.state.nowPage} total={this.state.movies.length}
                     pageSize={this.state.pageSize}  onChange={this.pageChanged}/>
               </div>
              
         }
    }

    pageChanged = (page) => {
        console.log(this.props)
        // 由于我们手动使用DOM对象，实现了跳转，这样不好，最好使用路由的方法，进行编程式导航
        // window.location.href = '/#/movie/' + this.state.movieType + '/'+ page
        // 使用 react-router-dom实现编程式导航
        this.props.history.push('/movie/'+ this.state.movieType + '/' + page)

    }
}

// 在React中，我们可以使用fetch  Api 来获取数据，fetchAPI 是基于 Promise 封装的