import React from 'react'
import '../public/range.css'

class Range extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      value: props.value
    }
  }

  static defaultProps = {
    min: 0,
    max: 245,
    step: 1
  }

  handleStateChange (event) {
    this.props.handleStateChange(parseFloat(this.state.value))
    this.setState({value: parseFloat(event.target.value)})  
  }

  render () {
    return (
      <div className='is-info filed'>
        <label htmlFor={this.props.id}>{this.props.id}</label>
        <input
          type="range"
          value={this.state.value}
          min={this.props.min}
          max={this.props.max}
          step={this.props.step}
          onChange={this.handleStateChange.bind(this)}
          className='is-info'
        />
      </div>
    )
  }
}

const { func, string } = React.PropTypes

Range.propTypes = {
  heightChange: func,
  id: string
}

export default Range
