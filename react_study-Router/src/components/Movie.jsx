import React from 'react'

export default class Movie extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            routeParams: props.match.params
        }
    }
    render(){
        console.log(this)
        // 如果需要从路由规则中，提取到匹配到的参数，进行使用，可有使用 this.props.match.params.***来访问
        return <div>
            {this.props.match.params.type} --- {this.props.match.params.id}
           <h1>这是movie组件-----{this.props.match.params.type} ---- {this.state.routeParams.id}</h1>
        </div>
    }
}