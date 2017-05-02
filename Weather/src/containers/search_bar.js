import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index' // with a request promise in payload => actions 

class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = { term: '' }
    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onInputChange (event) {
    this.setState({term: event.target.value})
  }

  onFormSubmit (event) {
    event.preventDefault()
    this.props.fetchWeather(this.state.term)
    this.setState({ term: '' })
  }
  
  render() {
    return (
      <form className='field has-addons' onSubmit={ this.onFormSubmit }>
        <p className="control is-expanded">
          <input
            type='text'
            placeholder='Get a five-day forecast in your favorite cites'
            className='input'
            value={ this.state.term }
            onChange={ this.onInputChange }
          />
        </p>
        <p className='control'>
          <button className='button is-primary' type='submit'>
            Search
          </button>
        </p>
      </form>
    )
  }
}

function mapDispatchToProps (dispatch) {
  // API:bindActionCreators
  // Turns an object whose values are action 
  // creators, into an object with the same keys, but with every 
  // action creator wrapped into a dispatch call so they may be 
  // invoked directly.
  return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)
