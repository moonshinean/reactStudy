import React from 'react'
import { inflate } from 'zlib'


// 评论列表项组件
export default class CMTBox extends React.Component {
 
    render(){
        return <div>
            <label >评论人：</label><br/>
            <input type="text" ref="user"/><br/>
            <label >评论内容：</label><br/>
            <textarea cols="30" rows="10" ref = "comment"></textarea><br/>
            <input type="button" value="发表" onClick={this.postComment}/>
        </div>
    }
    postComment = () => {
        // 1、获取到评论人和评论内容
        // 2、从本地存储中，先获取之前的评论数组
        // 3、把最新的这条评论，unshift进去
        // 4、把最新的评论数组，保存在本地存储中
        var cmtInfo = {user: this.refs.user.value, comment: this.refs.comment.value};
        var list = JSON.parse(localStorage.getItem('cmts') || '[]');
        list.unshift(cmtInfo);
        localStorage.setItem('cmts', JSON.stringify(list));
        this.refs.user.value = this.refs.comment.value = '';
        this.props.reload();
    }
}