import "./App.css";
import { useState } from "react";

function App() {
  const guestions = [
    {
      guestionText: "The capital of Azerbaijan?",
      answeOptions: [
        { answerText: "Ganja", isCorrect: false },
        { answerText: "Baku", isCorrect: true },
        { answerText: "Shamakhi", isCorrect: false },
        { answerText: "Guba", isCorrect: false },
      ],
    },
    {
      guestionText: "Which Company create the React?",
      answeOptions: [
        { answerText: "Meta", isCorrect: true },
        { answerText: "Google", isCorrect: false },
        { answerText: "Mirosoft", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
      ],
    },
    {
      guestionText: "Baku was born in?",
      answeOptions: [
        { answerText: "November 11", isCorrect: false },
        { answerText: "May 29", isCorrect: false },
        { answerText: "July 25", isCorrect: false },
        { answerText: "February 29", isCorrect: true },
      ],
    },
    {
      guestionText: "Which is not a programming language?",
      answeOptions: [
        { answerText: "Html", isCorrect: true },
        { answerText: "JavaScript", isCorrect: false },
        { answerText: "GO", isCorrect: false },
        { answerText: "Python", isCorrect: false },
      ],
    },
  ];

  const [currantGuesion, setCurrantGuesion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextGuestion = currantGuesion + 1;

    if (nextGuestion < guestions.length) {
      setCurrantGuesion(nextGuestion);
    } else {
      setShowScore(true);
    }
  };
  const refresh = () => {
    setCurrantGuesion(0);
    setScore(0);
    setShowScore(0);
  };

  return (
    <div className="App">
      {showScore ? (
        <div className="section__score">
          <span>
            Correct answers {score} from {guestions.length}
          </span>
          <button onClick={refresh} className="go__back">
            Click to go back
          </button>
        </div>
      ) : (
        <div className="quizz">
          <div className="question__section">
            <div className="question__count">
              <span>Question {currantGuesion + 1}</span> / {guestions.length}
            </div>
            <div className="guestion__text">
              {guestions[currantGuesion].guestionText}
            </div>
          </div>
          <div className="answer__section">
            {guestions[currantGuesion].answeOptions.map((item) => (
              <button
                onClick={() => handleOptionClick(item.isCorrect)}
                className="answer"
              >
                {item.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
