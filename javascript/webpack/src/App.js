import React, { useState } from 'react'
import {square} from './utils'

const App = () => {
  const [value, setValue] = useState(2)
  const [arrow, setArrow] = useState(() => {
    return ['arrow']
  })
  const arrowClicked = () => { setArrow((prev) => { return prev.length === 1? prev.concat('arrow-clicked') : ['arrow'] }) }
  return (
    <div>
      OLA REACT WEBPACK {value}
      <button type="text" onClick={() => { setValue(square(value)) }}>Square it!</button>
      <div className="text" >
      </div>
      <div className={arrow.join(' ')} onClick={arrowClicked} >
      </div>
    </div>
  )
}

export default App
