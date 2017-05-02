import React from 'react'
import { render } from 'react-dom'
import Range from './Range'
import Output from './Output'
import '../node_modules/bulma/css/bulma.css'

class App extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      height: 184,
      weight: 80,
      bmi: 23.6,
      bmiClass: 'Normal'
    }
    this.heightChange = this.heightChange.bind(this)
    this.weightChange = this.weightChange.bind(this)
  }

  heightChange (height) {
    this.setState({
      height: height
    },
    this.setBMI)
  }

  weightChange (weight) {
    this.setState({
      weight: weight
    },
    this.setBMI)
  }

  getBmiClass (bmi) {
    if (bmi < 18.5) return 'Underweight'
    if (bmi >= 18.5 && bmi <= 24.99) return 'Normal'
    if (bmi >= 25 && bmi <= 29.99) return 'Overweight'
    if (bmi >= 30) return 'Obese'
  }

  setBMI () {
    let bmi = ((this.state.weight / this.state.height / this.state.height) * 10000).toFixed(2)
    this.setState({
      bmi: parseFloat(bmi),
      bmiClass: this.getBmiClass(bmi)
    })
  }

  render () {
    return (
      <div className='app'>
        <section className="hero is-info is-fullheight">
          <div className="hero-body">
            <div className='container is-fluid'>
              <h1 className="title">BMI Calculator ：子组件向父组件通信</h1>
              <form>
                <div>
                  <Range
                    handleStateChange={this.heightChange}
                    value={this.state.height}
                    id={'Height'}
                  />
                </div>
                <div>
                  <Range
                    handleStateChange={this.weightChange}
                    value={this.state.weight}
                    id={'Weight'}
                  />
                </div>
              </form>
              <br /><br />
              <Output data={this.state}/>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))

