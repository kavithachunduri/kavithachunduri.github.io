import './App.css';
import {NavLink , Route, Routes} from "react-router-dom"
//import data from "./FakeData.json"
import Home from   "./screens/Home" 
import AboutUs from "./screens/AboutUs"
import CheckCook  from "./screens/CheckCook"
import Recipe  from "./screens/Recipe"
import NoMatch from "./screens/NoMatch"
import logo3 from "../src/logos/logo3.png"

function App() {
  return (
    <div className="App">
     <div className='links'> 
     <img src={logo3} alt="logo"/>
    <nav>
      {/* <NavLink to={"/"}><img src={logo1.png}></img></NavLink> */}
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/about"}>AboutUs</NavLink>
      <NavLink to={"/checkcook"}>CheckCook</NavLink>
    </nav>
   </div>
   
     <Routes>
         <Route path="/"  element={<Home />}  />
         <Route path="/about"  element={<AboutUs />}  />
         <Route path="/checkcook"  element={<CheckCook />}  />
         <Route path="checkcook/:recipe_id"  element={<Recipe />}  />
         <Route path="*" element={<NoMatch />} />
     </Routes>
    </div>
  );
}

export default App;
