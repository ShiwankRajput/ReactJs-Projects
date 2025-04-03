import css from "./GamePlay.module.css"
import Box from "./Box"
import { useState } from "react";
import RollDice from "./RollDice";

const GamePlay = () => {

  const [changeScore, setChangeScore] = useState(0)
  const [selectedNumber, setSelectedNumber] = useState() 
  const [changeDice, setChangeDice] = useState(1)
  const [showImage, setShowImage] = useState(false)

  const [select,setSelect] = useState("")

  const numberArray = [1,2,3,4,5,6];

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  const rollDice = (min,max) => {

    if(selectedNumber === undefined){
      setSelect("You have not selected any number")
      return;
    }

    setSelect("")
  
    let randomNumber = getRandomNumber(min,max);
    setChangeDice((prev) => randomNumber);

    if(selectedNumber === randomNumber){
      setChangeScore(prev => prev+randomNumber)
      console.log(changeScore)
    }
    else{
      setChangeScore(prev => prev-2)
    }

    setSelectedNumber()
  
  }


  const numberSelect = (value) => {
    setSelectedNumber(value)
    setSelect("")
  }

  const resetScore = () => {
    setChangeScore(0)
  }

  const showRules = () => {
    setShowImage(true)
  }

  return (
    <>
    
      <div className={css.container}>
        
        <div className={css.showScore}>
          <h1>{changeScore}</h1>
          <p>Total Score</p>
        </div>

        <div className={css.boxesContainer}>

          <div className={css.para1}>
            <p>{select}</p>
          </div>

          <div className={css.boxes}>
            {numberArray.map((i) => {
              return <Box isSelected={i === selectedNumber} key={i} onClick={() => numberSelect(i)} number={i}/>
            })}
          </div>
          
          <div className={css.para}>
            <p>Select Number</p>
          </div>
          
        </div>

      </div>

      <RollDice changeDice={changeDice} rollDice={rollDice}></RollDice>

      <div className={`${css.resetShow} ${css.btnContainer}`}>
            <button className={css.play1} onClick={resetScore}>Reset Score</button>
            <button className={css.play} onClick={showRules}>Show Rules</button>
      </div>

      {showImage ? 
      <div className={`${css.btnContainer}`}> 
        <img src="/images/rules.png" alt="" className={`${css.showRule}`}/> 
      </div>
      : <></>}
    
    </>
  )
}

export default GamePlay