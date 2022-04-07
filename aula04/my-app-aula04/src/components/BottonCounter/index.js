import { useState } from 'react'
import PropTypes from 'prop-types'
import { StiloBtn } from './styles'


const ButtonCounter = ({ step, startValue }) => {

  const [count, setCount] = useState(startValue)

  const [checked, setChecked] = useState(false)

  const [array, setArray] = useState([])

  const toggleCount = () => {
    setChecked(!checked)
  }

  const decrement = () => {
    setCount(count - step)
    setArray(array.concat(count))
  }

  const increment = () => {
    
    setCount(count + step)
    setArray([...array, count])

  }

  return (
    <div>
      <div>
        <StiloBtn checked={checked} onClick={toggleCount}>{
          checked
          ?'true'
          :'false'
        }        
        </StiloBtn>
      </div>  

      <button onClick={decrement}>-</button>
     <div>Contador:{count}</div>
     
     <div>Ultimos:{array.join(', ')}</div>

      
      <button onClick={increment}>+</button>
    </div>
  )

}

ButtonCounter.defaultProps = {
  startValue: 0,
  step: 1,
}

ButtonCounter.propTypes = {
  startValue: PropTypes.number,
  step: PropTypes.number,
}

export default ButtonCounter
