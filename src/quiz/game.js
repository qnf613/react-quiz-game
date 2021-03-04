import React from 'react'
import { useState } from 'react'
import EndScreen from './end-screen'
import Stats from './stats'
import TriviaItem from './trivia-item'
import triviaData from './trivia-data'
/**
 * The Game is responsible for orchestrating the flow of the quiz game.
 */
function Game() {
    const [gameState, setGameState] = useState({
        score:0,
        triviaIndex:0,
        isGameOver: false,
    });

    const {score, triviaIndex, isGameOver} = gameState;
    const questionNumber = triviaIndex + 1;
    const numQuestions = triviaData.length;

    const restartGame = () => {
        setGameState({
            score: 0,
            triviaIndex: 0,
            isGameOver: false,
        });
    };

    const loadNextQuestion = () =>{
        if(triviaIndex >= triviaData.length - 1){
            setGameState({ ...gameState, isGameOver: true})
        }
        else {
            // using the spread operator to copy the gameState and override the triviaIndex
            setGameState({
                ...gameState,
                triviaIndex: triviaIndex + 1,
            });
        }
    };

    const onAnswerSelected = (wasPlayerCorrect) =>{
        if(wasPlayerCorrect){
            setGameState({
                ...gameState,
                score: score + difficultyScore,
            });
        }
    };

    let pageContent;
    let difficultyScore;
    let questionDifficulty;
    if(isGameOver){
        pageContent = <EndScreen score={score} bestScore={0} onRetryClick={restartGame}/>
    } else {
        const triviaQuestion = triviaData[triviaIndex];
        const {correct_answer, incorrect_answers, question, difficulty} = triviaQuestion;
        pageContent = (
            <TriviaItem 
                key={triviaIndex}
                question={question}
                difficulty={difficulty}
                correctAnswer={correct_answer}
                incorrectAnswers={incorrect_answers}
                onNextClick={loadNextQuestion}
                onAnswerSelected={onAnswerSelected}
            />
        );
        questionDifficulty = difficulty;
        if(questionDifficulty == "easy"){
            difficultyScore = 1;
        }
        else if(questionDifficulty == "medium"){
            difficultyScore = 2;
        }
        else if(questionDifficulty == "hard"){
            difficultyScore = 3;
        }
    }

    return (
    <>
        <Stats score={score} questionNumber={questionNumber} totalQuestions={numQuestions} /> 
        {pageContent}
    </>
    );    
}

export default Game;