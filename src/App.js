import './App.css';
import { useState } from 'react';
import ExtraComponent from './ExtraComponent';

function App() {
const [login, setLogIn] =useState(false)
  return (
    <div className="App">
      <header className='App-header'>
       
        <h1> {login ? "Welcome Back" : "Please Login"}</h1>
        <div>
          <div>
        {login
              ?
              <>
              <button onClick={() => setLogIn(false)}> Log Out </button>
              <button onClick={() => {alert("you just got hacked");}}>Click Here</button>
              </>
              :
             <button onClick={() => setLogIn(true)}> Log In </button>
            }
        </div>
        </div>
        {login && <ExtraComponent />}
      </header>
    </div>
  );
}

export default App;
