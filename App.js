import {useState} from "react" ;
function App() {
  const question=[
    {
      questionText:"which is the javascript frontend framework that is used to create single page applications?",
      answerOption:[
        {answerText:"Node js",isCorrect:false},
        {answerText:"Express js",isCorrect:false},
        {answerText:"React js",isCorrect:true},
        {answerText:"Mongo DB",isCorrect:false},

      ],
    },
    {
      questionText:"classes and arrow functions are fundamentals of react",
      answerOption:[
        {answerText:"Node js",isCorrect:false},
        {answerText:"Express js",isCorrect:false},
        {answerText:"React js",isCorrect:true},
        {answerText:"mongo DB",isCorrect:false},
      ],
    },
    {
      questionText:"which among these is the framework of Node js?",
      answerOption:[
        {answerText:"Angular js",isCorrect:false},
        {answerText:"Express js",isCorrect:true},
        {answerText:"React js",isCorrect:false},
        {answerText:"Mongo DB",isCorrect:false},
      ],
    },
    {
      questionText:"who was invented react js",
      answerOption:[
        {answerText:"jordan walke",isCorrect:true},
        {answerText:"babbage",isCorrect:false},
        {answerText:"larrypage",isCorrect:false},
        {answerText:"sergey",isCorrect:false}
      ],
    },
    {
      questionText:"what is the full form of JSX?",
      answerOption:[
        {answerText:"Javascript Synatax Extension",isCorrect:true},
        {answerText:"Javascript Syntax Error",isCorrect:false},
        {answerText:"Javascript System Extension",isCorrect:false},
        {answerText:"Javascript System Equipment",isCorrect:false}
      ],
    },
    {
      questionText:"what are the  two types ofcomponents?",
      answerOption:[
        {answerText:"functional and array components",isCorrect:false},
        {answerText:"variables and class components",isCorrect:false},
        {answerText:"functional and class components",isCorrect:true},
        {answerText:"attribute and functional components",isCorrect:false},
      ],
    },
    {
      questionText:"what are the states?",
      answerOption:[
        {answerText:"read only components",isCorrect:false},
        {answerText:"updatable structure",isCorrect:true},
        {answerText:"passing the data",isCorrect:false},
        {answerText:"remove the data",isCorrect:false},
      ],
    },
    {
      questionText:"React handling system is very similar to_________?",
      answerOption:[
        {answerText:"DOM",isCorrect:true},
        {answerText:"properties",isCorrect:false},
        {answerText:"lists",isCorrect:false},
        {answerText:"keys",isCorrect:false},
      ],
    },
    {
      questionText:"NPM stands for______?",
      answerOption:[
        {answerText:"Node package manager",isCorrect:true},
        {answerText:"Node property management",isCorrect:false},
        {answerText:"Node private management",isCorrect:false},
        {answerText:"Node package Moment",isCorrect:false},
      ],
    },
    {
      questionText:"What is the current version of React js?",
      answerOption:[
        {answerText:"V17.0.63",isCorrect:false},
        {answerText:"V17.90.987",isCorrect:false},
        {answerText:"V123.78.90",isCorrect:false},
        {answerText:"V17.0.2",isCorrect:true},
      ],
    },
  ]
  const[currentQuestion,setCurrentQuestion]=useState(0);
  const[showScore,setshowScore]=useState(false);
  const[score,setScore]=useState(0);
  const handle=(isCorrect)=>{
    if(isCorrect){
      setScore(score+1)
    }
    const nextQuestion=currentQuestion+1;
    if(nextQuestion<question.length){
      setCurrentQuestion(nextQuestion)
    }else{
      setshowScore(true)
    }
  }
  return(
    <div className="app">
      {showScore ?(
        <div className="score-section">
          you scored {score} out of {question.length}
        </div>
      ):(
        <>
        <div className="question-section">
          <div className="question-count">
            <span>Question {currentQuestion+1}</span>/{question.length}
          </div>
          <div className="question-text">{question[currentQuestion].questionText}

          </div>
          <div class="answer-section">
            {question[currentQuestion].answerOption.map((answerOption) =>(
              <button onClick={() => handle(answerOption.isCorrect)}>{answerOption.answerText}</button>

            ))}
          </div>
        </div>
      </>
      )}
      
    </div>
  )
}
export default App