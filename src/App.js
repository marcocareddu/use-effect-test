import logo from './logo.svg';
import Button from './Components/Button';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState(0);
  const [heading, setHeading] = useState("Titolo basic");
  const [paragraph, setParagraph] = useState("Paragrafo basic");

  useEffect(() => {
    if(value > 1) {
      document.title = `Hai ${value} messaggi`
    } else if (value === 1) {
      document.title = `Hai ${value} messaggio`
    } else {
      document.title = `Nessun messaggio`
    }
  })

  // Funzioni dichiarate dentro un oggetto per passare solo l'oggetto come props.
  const functions = {
    addCount: () => { setValue(value + 1) },
    changeHeading: () => { setHeading("Titolo nuovo") },
    changeParagraph: () => { setParagraph("Paragrafo nuovo") },
    reset: () => {
      setValue(0) 
      setHeading("Titolo basic")
      setParagraph("Paragrafo basic")
    }
  }

  // Funzioni separate, in questo modo dovrei passare ogni singola funzione come props.
  
  // const addCount = () => { setValue(value + 1) };
  // const changeHeading = () => { setHeading("Titolo nuovo") };
  // const changeParagraph = () => { setParagraph("Paragrafo nuovo") };
  // const reset = () => {
  //   setValue(0) 
  //   setHeading("Titolo basic")
  //   setParagraph("Paragrafo basic")
  // }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{heading}</h1>
        <h2>Hai cliccato {value} volte</h2>
        <p>{paragraph}</p>

        {/* Passo direttamente un oggetto contenente tutte le funzioni dichiarate */}
        <Button {...functions}/>
      </header>
    </div>
  );
}

export default App;
