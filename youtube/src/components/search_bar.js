import React, { Component } from 'react'

class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = {SearchTerm: ''}
    this.onInputChange = this.onInputChange.bind(this)
  }

  render () {
    return (
      <div className='search-bar'>
        <input
          placeholder={`Search Video here`}
          onChange={this.onInputChange}
          value={this.state.SearchTerm}
        />
      </div>
    )
  }

  onInputChange (event) {
    this.setState({SearchTerm: event.target.value})
    this.props.onSearchTermChange(event.target.value)
  }

  componentDidMount () {
    
  }
}

export default SearchBar
