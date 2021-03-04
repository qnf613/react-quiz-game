import shuffle from "../common/utils/shuffle";
import { useState } from "react";
import "./trivia-item.css";
/**
 * The TriviaItem component renders an individual trivia question and waits for a user's answer.
 * @param {object} props
 * @param {string} props.correctAnswer
 * @param {string[]} props.incorrectAnswers
 * @param {string} props.question
 * @param {string} props.difficulty
 * @param {number} props.difficultyScore
 * @param {() => void} props.onNextClick
 * @param {(boolean) => void} props.onAnswerSelected
 */
function TriviaItem({ correctAnswer, incorrectAnswers, question, difficulty, onNextClick, onAnswerSelected}) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const hasPickedAnswer = selectedAnswer !== null;

  // let difficultyScore = null;
  // if(difficulty == "easy"){
  //   difficultyScore = 1;
  // } else if(difficulty == "medium"){
  //   difficultyScore = 2;
  // } else if (difficulty == "hard"){
  //   difficultyScore = 3;
  // }

  const allAnswers = [correctAnswer, ...incorrectAnswers];
  // useState can take a function that is run only when the state is initialized:
  const [shuffledAnswers] = useState(() => shuffle(allAnswers));

  let nextButtonClassname = "trivia-item__button trivia-item__next-button";
  if (!hasPickedAnswer) nextButtonClassname += " trivia-item__button--disabled";

  const onAnswerClick = (event) => {
    const playerAnswer = event.target.innerHTML;
    setSelectedAnswer(playerAnswer);
    const wasPlayerCorrect = playerAnswer === correctAnswer;
    onAnswerSelected(wasPlayerCorrect);
  };

  return (
    <div>
      <p className="trivia-item__question">{question}</p>
      <p className="trivia-item__difficulty">Difficulty: {difficulty}</p>
      <ul className="trivia-item__answers">
        {shuffledAnswers.map((answer, i) => {
          let className = "trivia-item__button";

          if (hasPickedAnswer) {
            //trivia-item__button--correct
            //trivia-item__button--incorrect
            //trivia-item__button--disabled
            const pickedThisAnswer = answer === selectedAnswer;
            const isThisCorrect = answer === correctAnswer;
            if (pickedThisAnswer && isThisCorrect) {
              className += " trivia-item__button--correct";
            } else if (pickedThisAnswer && !isThisCorrect) {
              className += " trivia-item__button--incorrect";
            } else {
              className += " trivia-item__button--disabled";
            }
          }

          return (
            <li key={answer}>
              <button className={className} onClick={onAnswerClick} disabled={hasPickedAnswer}>
                {answer}
              </button>
            </li>
          );
        })}
      </ul>
      <button className={nextButtonClassname} onClick={onNextClick} disabled={!hasPickedAnswer}>
        Next ➡
      </button>
    </div>
  );
}

export default TriviaItem;
