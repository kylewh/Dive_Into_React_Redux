import React from 'react'

class Output extends React.Component {
  render () {
    let bmiClassName
    const {height, weight, bmi, bmiClass} = this.props.data

    switch (this.props.data.bmiClass) {
      case 'Underweight':
        bmiClassName = 'is-warning'
        break
      case 'Normal':
        bmiClassName = 'is-success'
        break
      case 'Overweight':
        bmiClassName = 'is-warning'
        break
      case 'Obese':
        bmiClassName = 'is-danger'
        break
      default:
        bmiClassName = 'is-light'
        break
    }

    return (
      <div>
        <nav className="level">
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Height</p>
              <p className="title">{height}</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Weight</p>
              <p className="title">{weight}</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">BMI</p>
              <p className="title">{bmi}</p>
            </div>
          </div>
        </nav>
        <div className={`notification ${bmiClassName} has-text-centered`}>
          <h1>Tu Indice de Masa Corporal (IMC) es <strong>{bmi}</strong> Kg/m2</h1>
          <h1 className="subtitle is-3"><strong>{bmiClass}</strong></h1>
        </div>
      </div>
    )
  }
}

const { shape, number, string } = React.PropTypes

Output.propTypes = {
  data: shape({
    height: number,
    weight: number,
    bmi: number,
    bmiClass: string
  })
}

export default Output
