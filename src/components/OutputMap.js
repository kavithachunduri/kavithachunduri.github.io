import React from 'react'
import RecipeOut from '../components/RecipeOut'

function OutputMap(props) {

         //console.log("props from checkcook",props)
        const {mapping} = props
      // console.log('mapping',mapping)
     return(
         <div className="recipes">
                { mapping.map((item)=>{
                    

            return <RecipeOut  key={item.title} id={item.id} title={item.title} image={item.image} />

           
            })
        }
        
       </div>
       )
        
   


}

export default OutputMap