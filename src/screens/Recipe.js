import React, { useState , useEffect} from 'react'
import {useParams} from "react-router-dom"
import axios from "axios"
import {useNavigate} from "react-router-dom"




function Recipe() {
  //console.log("props in post", props)



  const navigate = useNavigate();


    const {recipe_id} = useParams();
    console.log("receipe",recipe_id)
//extracting id from url 
const[idData , setIdData ] = useState('')
const[button,setButton]= useState("")

const [summary, setSummary] = useState('false')

         async function getInstructions(id ){

  const BASE_URL = "https://api.spoonacular.com"
  const API_KEY = '58888b98c21c4a9db6db18650100b025'

  try{
  const response = await  axios.get(`${BASE_URL}/recipes/${id}/information?apiKey=${API_KEY}`);


  console.log("id api ",response);
  let output= response.data;
  console.log("2nd api call data", output)
          

         setIdData(output);
         
  }
  catch(error){
          return (error)
  }

}

const instructions = () => {
  setSummary("true");
  setButton("instructions");
}
const ingredients = () => {
  setSummary("true");
  setButton("ingredients");
}



useEffect(()=>{

  getInstructions(recipe_id )

  // setPosts(props.postsData);

},[recipe_id])


    return(
        
        <div className="wrapper">
              <div>
               <h2>{idData.title}</h2> 
               <img src={idData.image} alt="food pic" />
              
              </div>
          <div className='info'>
                <button className={`insButton , ${button==="instructions"? "active": ""}`}   onClick={instructions}>Instructions</button>
                <button className={`insButton , ${button==="ingredients"? "active": ""} `}  onClick={ingredients}>Ingredients</button>

                {button === "instructions" && (   
                  <h3 dangerouslySetInnerHTML={{ __html: idData.instructions }}></h3>
              )}

                    
               {button === "ingredients" && (
                <ul>
                  {idData.extendedIngredients && idData.extendedIngredients.map((ingredient) => (
                   <li key={ingredient.id}>{ingredient.original}</li> 
                 ))}
                </ul>
              )}
               
              {summary === "false" && (
               <div  className='summary'>
               <p dangerouslySetInnerHTML={{ __html: idData.summary }}></p>
               </div>

               
       
    )}   
               <div  className='returnTag '>
                <h3 >Time to make : {idData.readyInMinutes} minutes</h3>
               <a href={idData.sourceUrl}>source website</a> <br  />
               <button  onClick={() => navigate(-1)}>Previous Page </button>
               </div>
               </div>
        </div>
    )
}

export default Recipe



