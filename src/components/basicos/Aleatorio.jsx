import React from 'react'

const Aleatorio = ({ max, min }) => {
  return (
    <div>
      <h2>Este é o número aleatório entre {max} e {min} = {Math.floor(Math.random() * (max - min)) + min} </h2>
    </div>
  )
}

export default Aleatorio