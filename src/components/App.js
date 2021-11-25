import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from './Header';
import Filter from './Filter';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }



// document.addEventListener("DOMContentLoaded",()=>)

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header onDarkModeClick={handleDarkModeClick}
      currentState={isDarkMode}
      // pass down a callback function to retain functionality
      />
      <ShoppingList 
      // filterResult={handleCategoryChange}
      // firstSelect={selectedCategory}
      items={itemData} />
    </div>
  );
}
export default App;
