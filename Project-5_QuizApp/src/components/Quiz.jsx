import css from "./Quiz.module.css"

const Quiz = () => {
  return (
    <div className={css.container}>
        <h1>Quiz App</h1>
        <hr />
        <h2>1 - Which device is required for Internet Connection?</h2>
        <ul>
            <li>Modem</li>
            <li>Router</li>
            <li>LAN Cable</li>
            <li>Pen Drive</li>
        </ul>
        <button>Next</button>
        <div className={css.index}>1 of 5 questions</div>
    </div>
  )
}

export default Quiz