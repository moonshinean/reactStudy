import React from 'react'
// 注意： 在使用 import的时候，import 只能放到模块的开头位置
// import  inlineStyle from './cmtItemStyles.js'
// 导入评论下项的样式文件【z这种直接import '../路劲标识符的' css文件导入形式，并不是模块化的css】
import '../../css/commentItem.css'

// 当启用css模块化之后，导入样式表得到的itemStyles 就变成了一个样式对象，其中，属性名 食杂益阳市表中，定义的类名，属性值，是自动生成的一个复杂的类名。（防止类名称冲突）
import itemStyles from '../../css/commentItem.css'
 console.log(itemStyles)

// 封装一个评论项组件，此组件由于不需要自己的私有数据，所以字节定义为 无状态组件
export default function CommontItem(props) {
    // 注意：如果要使用 style属性，为JSX 语法创建的DOM元素，设置样式，不能像网页中那么写样式; 二是要是用JSX语法来写样式
    // 在写 style 样式的时候，外层的 {} 表示要写JS代码了， 内层的{} 表示用一个JS对象表示样式
    // 注意： 在style 的样式规则中，如果属性值的单位是 px，则px 可以省略, 直接写一个数组即可

    // #region 样式优化 1
     /*  const boxStyle = {border: '1px solid #ccc', margin: '10px 0', paddingLeft: 15}
    const titleStyle = {fontSize: 16, color: 'purple'}
    const boduStyle = {fontSize: 14, color: 'red'} */
    // #endregion 

    // #region 样式优化 2
        // const inlineStyle = {
        //     boxStyle: {border: '1px solid #ccc', margin: '10px 0', paddingLeft: 15},
        //     titleStyle:  {fontSize: 16, color: 'purple'},
        //     boduStyle: {fontSize: 14, color: 'red'}
        // }
      // #endregion 
  
//     return <div style = {inlineStyle.boxStyle}>
//     <h1 style= {inlineStyle.titleStyle}>评论人：{props.user}</h1>
//     <h3 style ={inlineStyle.boduStyle}>评论内容：{props.content}</h3>
// </div>

// 注意：当你还念vue中scoped 指令中，
    return <div className={itemStyles.box}>
    <h1 className={itemStyles.title}>评论人：{props.user}</h1>
    <h3 className ={itemStyles.body}>评论内容：{props.content}</h3>
    </div>
}