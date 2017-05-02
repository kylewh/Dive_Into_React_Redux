import React from 'react'
import { Sparklines, SparklinesLine, SparklinesBars, SparklinesReferenceLine } from 'react-sparklines'

function average(data) {
  return Math.round( data.reduce((a,b)=>(a+b),0) / data.length )
}

export default (props) => {
  return (
    <div>
      <Sparklines heigth={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type='avg' />
      </Sparklines>
      <div className='has'>{average(props.data)} {props.units}</div>
    </div>
  )
}
