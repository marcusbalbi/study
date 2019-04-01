import React, { useState } from 'react'
import {square} from './utils'

const App = () => {
  const [value, setValue] = useState(2)
  return (
    <div>
      OLA REACT WEBPACK {value}
      <button type="text" onClick={() => { setValue(square(value)) }}>Square it!</button>
    </div>
  )
}

export default App
