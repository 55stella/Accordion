
import './App.css';
import Questions from './questions';
import Info from './data'
import { useState } from 'react';


function App() {
  const[info, setInfo] =useState(Info)
  return (
    <main className="App">
      <div className="Container">
        <h4>Questions and Answers About Login</h4>
        </div>
        <div>
          {info.map(item=>{
            return <Questions {...item} key ={item.id} />

          })}
        

        </div>

        

    
    </main>
  );
}

export default App;
