import './App.css'
import StartGame from './components/StartGame/StartGame'
import GamePlay from './components/GamePlay/GamePlay'
import { useState } from 'react'

function App() {

  let [toggle,setToggle] = useState(false);

  const playGameToggle = () => {
    setToggle(prev => !prev)
  }
  
  return(
    <>

      {toggle ? <GamePlay/> : <StartGame playGameToggle={playGameToggle}/>}
    
    </>
    
  )

}

export default App


