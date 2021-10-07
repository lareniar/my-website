import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/form';

function App() {
  const [contador, setContador] = useState(0);
  // console.log(contador);
  // const setMiContador = (event: number) => {
  //   setContador(prev => prev + 1)
  // };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form />
        <p>
          Edit <code>{contador}</code> and save to reload.
        </p>
        {/* <button onClick={() => setMiContador(1)}>
          Enter
        </button> */}
      </header>
    </div>
  );
}

export default App;
