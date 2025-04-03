import { useState } from "react"
import css from "./RollDice.module.css"

const RollDice = ({changeDice,rollDice}) => {

    


  return (
    <div className={css.diceContainer}>

        <div className={css.dice}>
            <img src={`/images/dice/dice_${changeDice}.png`} alt="diceImage" onClick={() => rollDice(1,6)}/>
        </div>

        <p>
            Click on Dice to Roll
        </p>

    </div>
  )
}

export default RollDice