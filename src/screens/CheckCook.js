import React from 'react'
import {useState, useEffect} from "react"
import {getApi} from "../services/ApiCalls"
import OutputMap from '../components/OutputMap';
import Error from './Error';

function CheckCook() {
  const [value , setValue] = useState('');
  const [click,setClick] = useState([]);
  const [search,setSearch] = useState('');
  const[error,setError] =useState('')

  // useEffect(()=>{

  //   buttonClick()
  //   
  
  // },[search])
     
  const buttonClick =async() =>{
      
      if(search!==""){
      let response = await getApi(search , value);
     

      console.log("api response",response)

 
       
     console.log("length",response.data.totalResults);
    
      if(response.data.totalResults!==0){
        let output=response.data.results;
        console.log('output',output)
      setSearch('')
        setClick(output)
      setError("")

      }
      else{
        setError(`There are no results for ${search} `)
      }
    }

      else{
          setError("Type the name of the recipe you want in the box")
      }
    
 

   console.log("click", click);
  }

  return (
    <div className='container'>
      <h1 className='brand'>Keep Calm and Cook On</h1>
     {/* <h3>Type the name of the Recipe you want </h3> */}
     <div className='searchForm'>
     <input className="ccinput1" type="text" placeholder="Search Your Recipe...."  onChange={(e)=>setSearch(e.target.value)} />
     
     <button  className="ccbutton"  onClick={buttonClick}  > Click for recipe </button>
     <input type="number" className="ccinput2" placeholder = "number"   onChange={(e)=>setValue(e.target.value)} onKeyPress={(event) => {
        if (!/[0-9]/.test(event.key)) { event.preventDefault(); }    }}/>
 
     </div>
    <div>
    <OutputMap mapping={click}/>
    </div>
    <div>
      { error!=="" && <Error error={error}/>}
    </div>
    </div>
  

  )
}

export default CheckCook