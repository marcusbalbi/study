import React, { useState } from 'react'


const PersonCard = () => {
  const [state, setState] = useState('TESTE')
  return (
    <div>Eu sou uma Pessoa!{state}</div>
  )
}

export default PersonCard
