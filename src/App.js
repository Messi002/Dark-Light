import React, { createContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import 'font-awesome/css/font-awesome.min.css';
import './App.css'
import Forms from "./Forms";
import ReactSwitch from "react-switch";


export const ThemeContext = createContext("null")

function App() {
 const [theme, setTheme] = useState("light")
 const toggleTheme = () =>{
   setTheme((curr)=>(curr === "light" ? "dark" : "light"))
 }

  return (

<ThemeContext.Provider value={{theme, toggleTheme}}>
<div className="App " id={theme}>
  
    <div className="switch" style={{padding:'5px',textAlign:'center'}}>
    
    <div className="instrc">Click on the Toggling Button</div>
   
    <div>
    <label style={{textAlign:'center'}}>
        {theme == "light" ? "Ligh Mode" : "Dark Mode"}
      </label>
      <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
      </div>
    </div>
     
    <Forms/>

</div>
</ThemeContext.Provider>
  );
}

export default App;
