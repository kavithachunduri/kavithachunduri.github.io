
import React from 'react'
import Untitled from "../logos/Untitled.png"

function AboutUs() {
  return (
    <div className='aboutUs'>
        <h2>About us</h2>
        {/* <img src="https://media.istockphoto.com/photos/large-vegan-health-food-collection-for-vitality-picture-id1289934760" alt="foodpic" /> */}
        
        <img className='cbcImg' src={Untitled} alt="check before cook"/>
        <p>Welcome to Check Before U Cook! Here you are get to  find how to make any recipe you try to make but donnot know how to .....
        
        We want you to celebrate how nourishing, fun, and delicious cooking with seasonal fruits and vegetables can be. 
        Hoping  that the recipes here inspire you to try cooking a new vegetable, or try cooking a familiar vegetable in a new way. 
        when you type a recipe you want you get learn how to make it and time to make it . Go on  ... start searching for the receipes you love to make </p>
    </div>
  )
}

export default AboutUs