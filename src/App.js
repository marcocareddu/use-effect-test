import logo from './logo.svg';
import Button from './Components/Button';
import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState(0);
  const [title, setTitle] = useState("Titolo basic");
  const [paragraph, setParagraph] = useState("Paragrafo basic");

  // Funzioni dichiarate dentro un oggetto per passare solo l'oggetto come props.
  const functions = {
    addCount: () => { setValue(value + 1) },
    changeTitle: () => { setTitle("Titolo nuovo") },
    changeParagraph: () => { setParagraph("Paragrafo nuovo") },
    reset: () => {
      setValue(0) 
      setTitle("Titolo basic")
      setParagraph("Paragrafo basic")
    }
  }

  // Funzioni separate, in questo modo dovrei passare ogni singola funzione come props.
  
  // const addCount = () => { setValue(value + 1) };
  // const changeTitle = () => { setTitle("Titolo nuovo") };
  // const changeParagraph = () => { setParagraph("Paragrafo nuovo") };
  // const reset = () => {
  //   setValue(0) 
  //   setTitle("Titolo basic")
  //   setParagraph("Paragrafo basic")
  // }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{title}</h1>
        <h2>Hai cliccato {value} volte</h2>
        <p>{paragraph}</p>

        {/* Passo direttamente un oggetto contenente tutte le funzioni dichiarate */}
        <Button {...functions}/>
      </header>
    </div>
  );
}

export default App;
