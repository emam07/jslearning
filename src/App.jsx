import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Usercard from './card'

function App() {
  const [childData,setchildData]=useState("no data")
  const parentFunction=(dataByChild)=>{
    setchildData(dataByChild);
  }
  const[cards,setCards]= useState([{id:1,Title:'Card1',Content:'content1'}]);

  const cardGenrator=()=>{
    const newThing={
      Title:`Card ${cards.length+1}`,
      Content:`Content ${cards.length+1}`,
    }
    setCards([...cards,newThing]);

  }

  return (
    <>
    <button onClick={cardGenrator}> Card Genrator</button>
    <div className='card-container'>
        <div>
          
          {cards.map((card,index)=>{
            return (
              <Usercard key={index} Title={card.Title} Content={card.Content}/>
              
            )
          }
  
          )}.
          
      </div>
      

    </div>
    
    </>
  )
}

export default App
