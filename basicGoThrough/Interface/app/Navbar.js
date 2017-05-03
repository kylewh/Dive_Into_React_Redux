import React from 'react'
const { array } = React.PropTypes

const Navbar = React.createClass({
  propTypes: {
    navItems: array
  },
  render () {
    return (
    <header className='nav fixed'>
      <div className='nav-left'>
        <a className='nav-item'>
          <img src='http://bulma.io/images/bulma-logo.png' alt='Bulma logo' />
        </a>
        {
          this.props.navItems.map(function(item, idx) {
            var isActive = idx === 0 ? 'is-active' : ''
            return <a className={`nav-item `}>{item}</a>
          })
        }
      </div>
      <div className='nav-right'>
        <div className='nav-item field has-addons'>
          <p className='control'>
            <input className='input is-primary' type='text' name='search' placeholder='Search' value='' />
          </p>
          <p className='control'>
            <a className='button is-primary is-outlined'>
              Search
            </a>
          </p>
        </div>
      </div>
    </header>)
  } 
})

export default Navbar