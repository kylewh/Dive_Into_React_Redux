import React from 'react'
import { render } from 'react-dom'
import Navbar from './Navbar'
import Banner from './Banner'

render(
  <div>
    <Navbar navItems={['Pictures', 'Music', 'Videos', 'Documents']}/>
    <Banner />
  </div>
  ,document.getElementById('app')
  )