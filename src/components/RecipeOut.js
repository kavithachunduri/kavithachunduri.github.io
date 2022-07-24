import React from 'react'
import {useNavigate} from "react-router-dom"

function RecipeOut(props) {
    const navigate = useNavigate();


  return (
         <div className="recipeTile" key={props.id}>
        
        <img className='recipeTile_img' src={props.image } onClick={()=> navigate(`/CheckCook/${props.id}`)} alt="Post banner" />
        <p className='recipeTile_name'>{props.title}</p>
     
        </div>

  )
  
  // return (
  //        <div key={props.id}>
  //       <h3 >{props.title}</h3>
  //       <img  src={props.image } alt="Post banner" />
  //       <div className="m">
  //       <button onClick={()=> navigate(`/CheckCook/${props.id}`)}>Instuctions</button>
  //       </div>
  //       </div>

  // )

}

export default RecipeOut