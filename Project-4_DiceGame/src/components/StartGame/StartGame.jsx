import css from "./StartGame.module.css"

const StartGame = ({playGameToggle}) => {
  return (
    <div className={css.container}>

      <div>
        <img src="/images/dices.png" alt="diceImage" />
      </div>

      <div className={css.content}>
        <h1>DICE GAME</h1>
        <p>Roll the dice and test your luck!</p>
        <button className={css.play} onClick={playGameToggle}>Play Now</button>
      </div>

    </div>
  )
}

export default StartGame
