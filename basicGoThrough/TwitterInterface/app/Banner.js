import React from 'react'

const Banner = React.createClass({
  getInitialState () {
    return {
      colorFlag: 1,
      colorList: ['is-info', 'is-primary', 'is-dark'],
      color: 'is-info'
    }
  },
  handleStateChange (event) {
    console.log(this.state.colorFlag)
    this.setState({
      colorFlag: ++this.state.colorFlag % 3,
      color: this.state.colorList[this.state.colorFlag-1]
    })
  },
  render () {
    return (
      <section className={'hero is-large' + ' ' + this.state.color + ' '}>
        <div className='hero-body'>
          <div className='container has-text-centered'>
            <h1 className='title'>
              This is a demo
            </h1>
            <h2 className='subtitle'>
              for react pratice
            </h2>
            <div className='block'>
              <button className='button is-warning is-outlined' onClick={this.handleStateChange}>Switch Color</button>
            </div>
          </div>
        </div>
      </section>
    )
  }
})

export default Banner