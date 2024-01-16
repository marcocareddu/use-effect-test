import React from 'react'

const Button = ({reset, addCount, changeTitle, changeParagraph}) => {
    return (
      <div>
        <button onClick={() => addCount()}>Aumenta il contatore</button>
        <button onClick={() => changeTitle()}>Cambia Titolo</button>
        <button onClick={() => changeParagraph()}>Cambia Paragrafo</button>
        <button onClick={() => reset()}>Reset</button>
      </div>
    )
  }

export default Button
