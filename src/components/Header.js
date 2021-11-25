import React, { useState } from "react";

function Header({onDarkModeClick, currentState}){
    // new function here? the color change function
    console.log(currentState);
    
    return(
<header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {currentState ? "Light" : "Dark" } Mode
        </button>
      </header>
    )
}
export default Header