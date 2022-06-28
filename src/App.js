import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [estado, setEstado] = useState(false)
  
 function clickeame (){
  setEstado(!estado)
 }
 
  return (
   <>  
   <div className='div'>
       <button onClick={() => clickeame()} className='boton'>
          Apretame boludo
       </button>
       {estado && (<><h1 className='fc'>
        ¡¡¡¡¡¡¡¡¡Feliz cumple gil!!!!!!!!!
       </h1>
       <img className='gif' src='https://phoneky.co.uk/thumbs/screensavers/down/animals/ratonbaila_2l1kmive.gif' >
      
       </img></>)}
       
  </div>

  </>
  );
}

export default App;
