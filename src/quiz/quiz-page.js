import { useState, useEffect } from "react";
import he from "he";
import Game from "./game";
import LoadingSpinner from "../common/loading-spinner";
import ErrorMessage from "../common/error-message";

function QuizPage() {
  // isLoading, setIsloading
  const [quizFetch, setQuizFetch] = useState({
    isLoading: true,
    errorMessage: "",
    data: null,
  });

  //empty array for dependancies means the effect only runs on mount.
  useEffect(() => {
    async function getQuiz(){
        try{
            console.log("Fetching!");
            const url = "https://opentdb.com/api.php?amount=5&type=multiple";
            const response = await fetch(url);
            
            //stop the processing of the response and lick us over to the catch block
            if(!response.ok){
                throw new Error(`Something went wrong, server responded with ${response.status}.`);
            }

            const json = await response.json();
            const {response_code, results} = json;

            console.log(results);
            if(response_code === 1){
                throw new Error("Bad API request - no results!");
            } else if(response_code === 2){
                throw new Error("Bad API request - invalid parameter!");
            }

            //decode the trivia data HTML entities
            const decodedResults = results.map((item) => {
                return{
                  ...item,
                  difficulty: he.decode(item.difficulty),
                  question: he.decode(item.question),
                  correct_answer: he.decode(item.correct_answer),
                  incorrect_answers: item.incorrect_answers.map(incorrect => he.decode(incorrect)),
                };
              });
              console.log(decodedResults);
            
            //successfully pass all the errors checks!
            setQuizFetch({
                isLoading: false,
                errorMessage: "",
                data: decodedResults,
            });

        } catch (err){
            //display a generic error message.
            setQuizFetch({
                isLoading: false,
                errorMessage: "Something went wrong loading the quiz. Please try again later.",
                data: null,
            });
            //display specifics error for debugging in the console
            console.error(err);
        }
    }
    getQuiz();

    //TODO: we should cleanup if the user leaves the page before fetch
    //finishes running
  }, []);
  
  const { isLoading, errorMessage, data } = quizFetch;

  let contents;
  if (isLoading) contents = <LoadingSpinner />;
  else if (errorMessage !== "") contents = <ErrorMessage>Something went wrong!</ErrorMessage>;
  else contents = <Game triviaData={data}/>;

  return <main>{contents}</main>;
}

export default QuizPage;
