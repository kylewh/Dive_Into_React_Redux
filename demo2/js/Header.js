import React from 'react'
import { Link } from 'react-router'
import { setSearchTerm } from './actionCreators'
import { connect } from 'react-redux'

class Header extends React.Component {// Using ES6 syntax, but not so convinience as React.createClass({})
  constructor (props) {
    super(props)
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this)// guranteed
  }
  handleSearchTermChange (event) {
    this.props.dispatch(setSearchTerm(event.target.value))
  }// we are using ES6 class so we must gurantee 'this' be the Header
  render () {
    let utilSpace
    if (this.props.showSearch) {
      utilSpace = <input
        onChange={this.handleSearchTermChange}
        value={this.props.searchTerm}
        type='text'
        placeholder='Search'
      />
    } else {
      utilSpace = (
        <h2>
          <Link to='/search'>
            Back
          </Link>
        </h2>
      )
    }
    return (
      <header>
        <h1>
          <Link to='/'>
            svideo
          </Link>
        </h1>
        {utilSpace}
      </header>
    )
  }
}

const { func, bool, string } = React.PropTypes
Header.propTypes = {
  dispatch: func,
  showSearch: bool,
  searchTerm: string
}

const mapStatetoProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStatetoProps)(Header)
