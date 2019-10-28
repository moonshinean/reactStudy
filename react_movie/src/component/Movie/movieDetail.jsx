import React from 'react'
import { Spin, Alert,Button, Icon } from 'antd';
import fetchJsonp from 'fetch-jsonp'
export default class MovieDetail extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            key:'b7d4fe0a377c551ddde70389f73b4e2b',
            info: {}, //电影对象
            isloading: true
        }
    }
    componentWillMount(){
        fetchJsonp(`http://v.juhe.cn/movie/query?key=${this.state.key}&movieid=${this.props.match.params.id}`).then(
            res => res.json()
        ).then(value => {
                if(value.resultcode === '200'){
                    console.log(value)
                       this.setState({
                           info: value.result,
                           isloading: false
                       })
                }
                
            }
        )
        // var json = require('../../test_data/detail.json')
        // console.log(json)
        // this.setState({
        //     info: json.result,
        //     isloading: false
        // })
    }
    render(){
        return <div>
           <Button type="primary" onClick={this.goBack}>
            <Icon type="left" />
            返回电影列表页面
          </Button>
          { this.renderInfo()}
        </div>
    }
    goBack = () => {
        console.log(this.props)
        this.props.history.goBack()
    }
    renderInfo = () => {
        console.log(this.state.isloading)
       if(this.state.isloading) {
            return <Spin tip="Loading...">
                    <Alert
                    message="正在请求电影数据"
                    description="精彩内容即将呈现..."
                    type="info"
                    />
            </Spin>
       }else {
         return <div>
             <div style={{textAlign: 'center'}}>
                 <h1>{this.state.info.title}</h1>

                 <img src={this.state.info.poster} alt=""/>
             </div>
            <p style={{textIndent:'2em', lineHeight: '28px'}}>{this.state.info.plot_simple}</p>
         
         </div>
       }
    }
}