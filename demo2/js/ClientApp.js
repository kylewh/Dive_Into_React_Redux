import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router'
import App from './App'

render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('app'))

// const App = React.createClass({
//   render: function () {
//     return (
//       <div className='app'>
//         <div className='landing'>
//           <h1>svideo</h1>
//           <input type='text' placeholder='Search' />
//           <a>or Browse All</a>
//         </div>
//       </div>
//     )
//   }
// })

// <App /> will be transplied to 'React.createElement(App)
