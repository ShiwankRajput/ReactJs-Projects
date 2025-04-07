import { useRef, useState } from "react"
import css from "./Quiz.module.css"
import { data } from "../assets/data";

const Quiz = () => {

  let [index,setIndex] = useState(0);
  const [questions,setQuestions] = useState(data[index]);
  const [lock,setLock] = useState(false)
  const [score, setScore] = useState(0)
  const [result, setResult] = useState(false)

  let option1 = useRef(null);
  let option2 = useRef(null);
  let option3 = useRef(null);
  let option4 = useRef(null);

  const option_array = [option1,option2,option3,option4];

  const checkAns = (e,value)=>{
    if(lock === false){
      if(questions.ans === value){
        e.target.classList.add("correct")
        setLock(true)
        setScore(prev => prev+1)
      }
      else{
        e.target.classList.add("wrong")
        setLock(true)
        option_array[questions.ans-1].current.classList.add("correct")
      }
    }
    
  }

  const nextQues = ()=>{

    if(lock === true){
      if(index === data.length-1){
        setResult(true);
      }
      setIndex(++index);
      setQuestions(data[index]);
      setLock(false)
      option_array.map((option) => {
        option.current.classList.remove("wrong")
        option.current.classList.remove("correct")
        return null;
      })
    }
    
  }

  const reset = ()=>{
    setIndex(0);
    setQuestions(data[0]);
    setScore(0);
    setLock(false);
    setResult(false);
  }

 
  return (
    <div className={css.container}>
        <h1>Quiz App</h1>
        <hr />
        {result ? <></> : 
        <>

          <h2>{index+1} - {questions.question}</h2>
          <ul>
              <li ref={option1} onClick={(e) => checkAns(e,1)} className="list">a. {questions.option1}</li>
              <li ref={option2} onClick={(e) => checkAns(e,2)} className="list">b. {questions.option2}</li>
              <li ref={option3} onClick={(e) => checkAns(e,3)} className="list">c. {questions.option3}</li>
              <li ref={option4} onClick={(e) => checkAns(e,4)} className="list">d. {questions.option4}</li>
          </ul>
          <button onClick={nextQues}>Next</button>
          <div className={css.index}>{index+1} of {data.length} questions</div>

        </>}

        {result ? <>
          <h2 className={css.scored}>You Scored : {score} out of {data.length}</h2>
          <button onClick={reset}>Reset</button>
        </> : <></>}

        
    </div>
  )
}

export default Quiz