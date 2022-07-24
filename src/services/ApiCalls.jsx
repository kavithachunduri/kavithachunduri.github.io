import React from 'react'
import axios from 'axios';






export async function getApi(search , value){

    const BASE_URL = "https://api.spoonacular.com"
    const API_KEY = '58888b98c21c4a9db6db18650100b025'
    

    try{
    const response = await  axios.get(`${BASE_URL}/recipes/complexSearch?apiKey=${API_KEY}&query=${search}&number=${value}`);


    console.log("response from api call ",response)
    return response;
    }
    catch(error){
            return (error)
    }
   

}
