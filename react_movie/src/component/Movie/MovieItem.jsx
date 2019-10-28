import React from 'react'
import styles from '../../css/movie_item.scss'
import { Rate } from 'antd';

export default class MovieItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            star: Math.round(Math.random()*5)
        }
    }
    render(){
         return <div className= {styles.box} onClick={this.geDetail}>
             <img className= {styles.img} src={this.props.pic_url} alt=""/>
             <h4 >电影名称：{this.props.movieName}</h4>
             <h4 >上映年份：2019年10月</h4>
             <h4 >电影类型：惊悚</h4>
             <Rate disabled defaultValue={this.state.star} />
        </div>
    }
    geDetail = () => {
        console.log(this.props)
        this.props.history.push('/movie/detail/' + this.props.movieId) 
    }
}