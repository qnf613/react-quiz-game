import { useState, useEffect } from "react";
import LoadingSpinner from "../common/loading-spinner";
import ErrorMessage from "../common/error-message";

function RandomDogs() {
  // isLoading, setIsloading
  const [dogFetch, setDogFetch] = useState({
    isLoading: true,
    errorMessage: "",
    data: null,
  });

  //empty array for dependancies means the effect only runs on mount.
  useEffect(() => {
    async function getDog(){
        try{
            console.log("Fetching!");
            const url = "https://dog.ceo/api/breeds/image/random/5";
            const response = await fetch(url);
            
            //stop the processing of the response and lick us over to the catch block
            if(!response.ok){
                throw new Error(`Something went wrong, server responded with ${response.status}.`);
            }

            const json = await response.json();
            const {message, status} = json;
            console.log(message);
            if(status !== "success"){
                throw new Error("Bad API request - no results!");
            }


            //successfully pass all the errors checks!
            setDogFetch({
                isLoading: false,
                errorMessage: "",
                data: message,
            });

        } catch (err){
            //display a generic error message.
            setDogFetch({
                isLoading: false,
                errorMessage: "Something went wrong loading the images. Please try again later.",
                data: null,
            });
            //display specifics error for debugging in the console
            console.error(err);
        }
    }
    getDog();
  }, []);
  
  const { isLoading, errorMessage, data } = dogFetch;

  let contents;
  if (isLoading) contents = <LoadingSpinner />;
  else if (errorMessage !== "") contents = <ErrorMessage>Something went wrong!</ErrorMessage>;
  else contents = data;

  return <main>{contents}</main>;
}

export default RandomDogs;