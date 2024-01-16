import React from 'react'

const Button = ({reset, addCount, changeHeading, changeParagraph}) => {
    return (
      <div>
        <button onClick={() => addCount()}>Aumenta i messaggi</button>
        <button onClick={() => changeHeading()}>Cambia Titolo</button>
        <button onClick={() => changeParagraph()}>Cambia Paragrafo</button>
        <button onClick={() => reset()}>Reset</button>
      </div>
    )
  }

export default Button
