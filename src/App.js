import './App.css';
import MyHome from './components/MyHome';
import Murali from './components/Murali';
import {useState} from 'react';



function App() {
  const[a,setvar] =useState('murali')
  return (
    <div>
        <p>
          <button onClick={()=>setvar('murali')} >About me</button><button onClick={()=>setvar('home')}>My Town</button>
          {a=="murali"?<Murali/>:<MyHome />}</p>
    </div>
  );
}

export default App;





