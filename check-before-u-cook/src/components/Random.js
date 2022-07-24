//import React from 'react'
import React, { useState , useEffect} from 'react'
import {useNavigate} from "react-router-dom"

function Random(props) {
    const {map} = props;
    console.log("randommap", map)
   
 

    const navigate = useNavigate();


  return (
    <div className='popular'>

{map && map.map((item)=>{
            return <div className="popularRecipes"   key={item.id} >
                
                <img  onClick={()=> navigate(`/CheckCook/${item.id}`)}  src={item.image } alt="Post banner" />
                <h3>{item.title}</h3>
                {/* <div className="m">
                 <button onClick={()=> navigate(`/CheckCook/${item.id}`)}>Get Recipe</button>
                   </div> */}


    </div>
       })}
       </div>
  )
}

export default Random