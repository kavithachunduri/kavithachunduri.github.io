import React, {useEffect,useState} from 'react';
import Random from "../components/Random";
import axios from "axios"


function Home() {


  const BASE_URL = "https://api.spoonacular.com"
  const API_KEY = '58888b98c21c4a9db6db18650100b025'

   const[recipes,setRecipes]= useState([]);
   useEffect(()=>{
    getRecipe();
    //console.log('i am loaded')

   },[]);
  

   const getRecipe = async () => {


    try{
    const response = await  axios.get(`${BASE_URL}/recipes/random?apiKey=${API_KEY}&number=6`);
        console.log("random", response.data.recipes)
    const  data= response.data.recipes ;
    setRecipes(data);


    }
    catch(error){
            return (error)
    }
   

}
  



  return (
    <div className='home'>
      <h1>Check Before Cook</h1>
      <h3>Better to see and try something once than to hear about it a thousand times.......</h3>
       
       <p>Searching for a particular recipe go to <a href="../checkcook">CheckCook</a> </p>
       <h2>Our popular recipes</h2>
       <Random   map={recipes}/>
    </div>

  )
}

export default Home
