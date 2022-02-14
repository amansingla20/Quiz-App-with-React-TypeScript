import React, { useState } from 'react';
import QuestionCard from './Components/QuestionCard';


function App() {

  const [loading, setLoading] = useState(false);


  
  const startQuiz = async() => {
  }

  const checkAnswer = (event : React.MouseEvent<HTMLButtonElement>) => { 

   }

   const nextQuestion = () =>{

   }

  return (
    <div className="App">
     <h1> QUIZ</h1>
     <button className ="start">
       Start
     </button>
     <p className='score'>Score:</p>
     <p>Loading Questions...</p>
    <QuestionCard/>
    <button className = "next" onClick = {nextQuestion}>
      Next Question
    </button>
    </div>
  );
}

export default App;
