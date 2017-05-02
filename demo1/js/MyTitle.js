import React from 'react'

// var div = React.DOM.div
// var h1 = React.DOM.h1

// var MyTitle = React.createClass({
//     render: function () {
//         return (
//             div(null,
//                 h1({
//                     style: {
//                         color: this.props.color,
//                         fontWeight: 'bold'
//                     }
//                 }, this.props.title) // 参数里的key
//             )
//         )
//     }
// })

// JSX style
var MyTitle = React.createClass({
  render: function () {
    const style = { color: this.props.color }
    return (
      <div>
        <h1 style={style} >
          {this.props.title}
        </h1>
      </div>
    )
  }
})

export default MyTitle