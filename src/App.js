
import './App.css';
import MainPage from './components/MainPage';
import Quiz from './Quiz';
import React from 'react';

function App() {
  const [isStarted, setIsStarted] = React.useState(false)
  const [state,setState] = React.useState([])

  function startQuiz(){
    setIsStarted(true)
  }

  
  React.useEffect(()=>{
    // async function getData(){
    //   // console.log(isStarted)
    //   const resp = await fetch('https://opentdb.com/api.php?amount=10')
    //   const data = await resp.json()
    //   // console.log(data)
    //   return data.results
    // }
    // const result = getData()
    setState([{
      "category": "Entertainment: Video Games",
      "type": "boolean",
      "difficulty": "hard",
      "question": "The retail disc of Tony Hawk&#039;s Pro Skater 5 only comes with the tutorial.",
      "correct_answer": "True",
      "incorrect_answers": [
      "False"
      ]
      },
      {
      "category": "Entertainment: Video Games",
      "type": "multiple",
      "difficulty": "hard",
      "question": "Which of these TrackMania environments was NOT in the original game?",
      "correct_answer": "Bay",
      "incorrect_answers": [
      "Desert",
      "Snow",
      "Rally"
      ]
      },
      {
      "category": "Geography",
      "type": "boolean",
      "difficulty": "easy",
      "question": "Vatican City is a country.",
      "correct_answer": "True",
      "incorrect_answers": [
      "False"
      ]
      },
      {
      "category": "Entertainment: Video Games",
      "type": "multiple",
      "difficulty": "hard",
      "question": "The map featured in Arma 3 named &quot;Altis&quot; is based off of what Greek island?",
      "correct_answer": "Lemnos",
      "incorrect_answers": [
      "Ithaca",
      "Naxos",
      "Anafi"
      ]
      },
      {
      "category": "Geography",
      "type": "multiple",
      "difficulty": "medium",
      "question": "Which Canadian province has Charlottetown as its capital?",
      "correct_answer": "Prince Edward Island",
      "incorrect_answers": [
      "Saskachewan",
      "Northwest Terrirories",
      "Ontario"
      ]
      },
      {
      "category": "Sports",
      "type": "multiple",
      "difficulty": "medium",
      "question": "In Formula 1, the Virtual Safety Car was introduced following the fatal crash of which driver?",
      "correct_answer": "Jules Bianchi",
      "incorrect_answers": [
      "Ayrton Senna",
      "Ronald Ratzenberger",
      "Gilles Villeneuve"
      ]
      },
      {
      "category": "Science & Nature",
      "type": "multiple",
      "difficulty": "hard",
      "question": "What is the same in Celsius and Fahrenheit?",
      "correct_answer": "-40",
      "incorrect_answers": [
      "32",
      "-39",
      "-42"
      ]
      },
      {
      "category": "Entertainment: Board Games",
      "type": "multiple",
      "difficulty": "medium",
      "question": "Europa Universalis is a strategy video game based on which French board game?",
      "correct_answer": "Europa Universalis",
      "incorrect_answers": [
      "Europe and the Universe",
      "Europa!",
      "Power in Europe"
      ]
      },
      {
      "category": "Art",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Which painting was not made by Vincent Van Gogh?",
      "correct_answer": "The Ninth Wave",
      "incorrect_answers": [
      "Caf&eacute; Terrace at Night",
      "Bedroom In Arles",
      "Starry Night"
      ]
      },
      {
      "category": "History",
      "type": "multiple",
      "difficulty": "hard",
      "question": "What is the name of the Boeing B-29 that dropped the &#039;Little Boy&#039; atomic bomb on Hiroshima?",
      "correct_answer": "Enola Gay",
      "incorrect_answers": [
      "Necessary Evil",
      "The Great Artiste",
      "Full House"
      ]
      }])
    // setState(result)
  },[])


  return (
    <div className="App">
      <header className="App-header">
        {isStarted ? <Quiz data={state}/> : <MainPage handleClick={startQuiz} />}
      </header>
    </div>
  );
}

export default App;
